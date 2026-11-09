# 输入输出契约

## 输入字段

| 键 | 名称 | 类型 | 必填 |
|---|---|---|---|
| `course_financials` | 课程财务数据 | array | 是 |
| `course_operations` | 课程运营数据 | array | 是 |
| `student_placement_constraints` | 在读学生安置约束 | array | 是 |
| `strategic_priorities` | 战略优先级 | array | 否 |
| `decision_weights` | 决策权重 | object | 是 |

## 状态

- `completed`：核心成果完整，关键结论人工确认要求满足。
- `completed_with_limits`：至少一项实质成果，说明限制、已完成和受阻范围。
- `needs_input`：必填字段缺失。
- `needs_confirmation`：资料冲突或人工确认未完成。
- `failed`：计算或工具失败。

## 输出

- `课程组合矩阵`：结构化条目数组，不允许空壳或占位文本。
- `盈利排名`：结构化条目数组，不允许空壳或占位文本。
- `资源占用`：结构化条目数组，不允许空壳或占位文本。
- `保留/改造/退出建议`：结构化条目数组，不允许空壳或占位文本。
- `情景对比`：结构化条目数组，不允许空壳或占位文本。
- `学生安置和风险清单`：结构化条目数组，不允许空壳或占位文本。

完整机器契约见`contract/input.schema.json`、`contract/output.schema.json`和`contract/runtime_contract.json`。
