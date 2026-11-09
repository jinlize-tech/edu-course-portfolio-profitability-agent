# 课程产品组合盈利诊断示例

## 典型场景

12门课程里3门贡献大部分毛利，2门低满班但占用优秀教师。

## 具体示例

Agent 不只按毛利砍课，还会评估续费、课程链条和在读学生安置，给出分阶段退出与替代方案。

## 脱敏输入示例

```json
{
  "contract_version": "1.2.0",
  "data_status": "confirmed",
  "contains_sensitive_data": false,
  "requested_output_language": "zh-CN",
  "course_financials": [
    {}
  ],
  "course_operations": [
    {}
  ],
  "student_placement_constraints": [
    {}
  ],
  "strategic_priorities": [
    {}
  ],
  "decision_weights": {},
  "resume_mode": "new"
}
```

## 预期处理

1. 运行输入契约校验。
2. 逐项核对输入来源、版本和口径。
3. 按`references/PROFESSIONAL_PLAYBOOK.md`完成专业分析。
4. 输出课程组合矩阵、盈利排名、保留/改造/退出建议等核心成果。
5. 由业务负责人确认输入事实、关键假设和最终成果适用范围后才可作为正式业务结论。

## 不应出现的输出

- 虚构政策、价格、人员、课程或客户事实。
- 以“暂无”“待完善”等占位文本冒充完成。
- 无依据的确定性判断或伪造人工签批。
