# 使用说明

## 适用任务

12门课程里3门贡献大部分毛利，2门低满班但占用优秀教师。

## 准备输入

课程清单、收入与成本、班型、满班率、教师占用、续费、退费、招生周期、战略目标。使用前先脱敏姓名、联系方式和与任务无关的敏感信息。

## 操作步骤

1. 统一课程编码
2. 建立盈利视图
3. 分群分析
4. 识别现金牛/问题课
5. 设计组合情景
6. 制定退出/改造计划
7. 设监控指标

## 校验命令

```powershell
node scripts/validate_input.js examples/typical_input.json
node scripts/validate_output.js examples/typical_output.json
```

## 状态使用

- `completed`：核心成果完整。
- `completed_with_limits`：只完成可验证部分，并说明受阻范围。
- `needs_input`：缺少关键输入。
- `needs_confirmation`：资料冲突或需人工确认。
- `failed`：工具或计算失败，提供恢复动作。

## 人工确认

业务负责人复核输入事实、关键假设和最终成果适用范围后，成果才可进入正式业务使用。
