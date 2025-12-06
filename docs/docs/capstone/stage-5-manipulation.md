---
sidebar_position: 6
---

# Stage 5: Manipulation - Grasping & Control

## Overview

Stage 5 executes final manipulation tasks: grasping, lifting, moving, and placing objects.

## Manipulation Pipeline

Grasp Planning → Arm Trajectory → Gripper Control → Task Execution

```python
# Grasp planning
grasp = plan_grasp(object_3d)

# Arm kinematics
trajectory = compute_trajectory(grasp)

# Execute
execute_trajectory(trajectory)
gripper.grasp()
```

## Humanoid Dexterity

- Hand kinematics (5-digit hands)
- Force feedback
- Tool use
- Object manipulation

## Full Capstone Flow

1. ✓ Voice: "Pick up the cup"
2. ✓ Planning: Decompose into subtasks
3. ✓ Navigation: Move to cup location
4. ✓ Perception: Detect cup, compute grasp
5. ✓ Manipulation: Execute grasp and lift

## Exercises

1. Grasp primitive objects (cube, cylinder)
2. Execute pick-and-place
3. Handle fragile objects safely

## References

- Grasp Planning: https://arxiv.org/abs/2103.16928
- Humanoid Hands: https://arxiv.org/abs/2301.12553

---

Difficulty: ✭✭✭✭✭ | Duration: 5 hours | Capstone Stage 5 (Final)
