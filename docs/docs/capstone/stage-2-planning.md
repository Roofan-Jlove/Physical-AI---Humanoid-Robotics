---
sidebar_position: 3
---

# Stage 2: Planning - Task Decomposition

## Overview

Stage 2 converts high-level goals into actionable robot sub-tasks using AI planning and language models.

## Architecture

```
Natural Language Goal
    ↓
Language Model (GPT, Gemini)
    ↓
Task Decomposition
    ↓
Sequence of Actions
    ↓
Stages 3-5 Execution
```

## Planning Example

**Input**: "Bring me a glass of water from the kitchen"

**Output Plan**:
1. Navigate to kitchen
2. Locate water dispenser
3. Grasp glass
4. Fill with water
5. Navigate back
6. Deliver to user

## Implementation

```python
from langchain import OpenAI

planner = OpenAI(api_key="...")
plan = planner.generate_plan(goal_text)
# Parse plan into action sequence
```

## Task Representations

- PDDL (Planning Domain Definition Language)
- Hierarchical Task Network (HTN)
- Behavior trees

## References

- HTN Planning: https://arxiv.org/abs/2403.01520
- LLMs for Planning: https://arxiv.org/abs/2305.04091

---

Difficulty: ✭✭✭ | Duration: 3-4 hours | Capstone Stage 2
