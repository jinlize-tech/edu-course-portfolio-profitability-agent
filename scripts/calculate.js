'use strict';

const FORMULA_VERSION = '1.0.0';

function fail(code, message, field) {
  return { ok: false, error: { code, message, field: field || null, formula_version: FORMULA_VERSION } };
}

function money(value) {
  return Math.round((value + Number.EPSILON) * 100) / 100;
}

function finiteNumber(value, field, minimum) {
  if (typeof value !== 'number' || !Number.isFinite(value)) {
    throw new Error(`INPUT_INVALID:${field}`);
  }
  if (minimum !== undefined && value < minimum) {
    throw new Error(`INPUT_INVALID:${field}`);
  }
  return value;
}

function ratio(value, field) {
  finiteNumber(value, field, 0);
  if (value > 1) throw new Error(`INPUT_INVALID:${field}`);
  return value;
}

function run(fn, input) {
  try {
    return { ok: true, formula_version: FORMULA_VERSION, result: fn(input) };
  } catch (error) {
    const [code, field] = String(error.message).split(':');
    return fail(code || 'CALCULATION_FAILED', code === 'INPUT_INVALID' ? '输入缺失或非法' : String(error.message), field);
  }
}

function calculateImpl(input) {
  const courses = input.courses;
  if (!Array.isArray(courses) || courses.length === 0) throw new Error('INPUT_INVALID:courses');
  const seen = new Set();
  const results = [];
  let contributionTotal = 0;
  let weightedRenewalNumerator = 0;
  let studentsTotal = 0;
  courses.forEach((course, index) => {
    const name = String(course.name || '').trim();
    if (!name) throw new Error(`INPUT_INVALID:courses[${index}].name`);
    if (seen.has(name)) throw new Error(`INPUT_CONFLICT:courses[${index}].name`);
    seen.add(name);
    const revenue = finiteNumber(course.net_revenue, `courses[${index}].net_revenue`, 0.01);
    const variable = finiteNumber(course.variable_cost, `courses[${index}].variable_cost`, 0);
    const hours = finiteNumber(course.resource_hours, `courses[${index}].resource_hours`, 0.01);
    const students = finiteNumber(course.students, `courses[${index}].students`, 0);
    const renewal = ratio(course.renewal, `courses[${index}].renewal`);
    const refund = ratio(course.refund, `courses[${index}].refund`);
    const contribution = revenue - variable;
    contributionTotal += contribution;
    weightedRenewalNumerator += students * renewal;
    studentsTotal += students;
    results.push({
      name,
      contribution: money(contribution),
      margin_rate: contribution / revenue,
      contribution_per_resource_hour: money(contribution / hours),
      course_weighted_renewal_contribution: students * renewal,
      refund_rate: refund,
    });
  });
  return {
    courses: results,
    portfolio_contribution: money(contributionTotal),
    weighted_renewal_rate: studentsTotal > 0 ? weightedRenewalNumerator / studentsTotal : 0,
    currency: '本币',
    note: '权重需由用户确认；本计算不使用模型自定权重',
  };
}

function calculate(input) {
  return run(calculateImpl, input || {});
}

module.exports = { calculate, FORMULA_VERSION };
