---
sidebar_position: 5
---

# Stage 4: Perception - Scene Understanding

## Overview

Stage 4 gives the robot visual understanding of its environment and task-relevant objects.

## Perception Pipeline

Multi-Sensor Fusion → Detection → Segmentation → Affordance Recognition

```python
# RGB-D perception
image = get_camera_frame()
depth = get_depth_frame()

# Object detection
objects = detect_objects(image)

# Affordance: Which objects can be grasped?
graspable = filter_graspable(objects)
```

## Key Outputs

- Object locations (3D coordinates)
- Object class labels
- Grasp affordances
- Surface normals

## Integration

Feeds into Stage 5 (Manipulation):
- "Object 42 is a glass at (0.5, 0.3, 0.8)"
- "Recommended grasp: top handle"

## References

- Isaac Sim Perception: https://docs.nvidia.com/isaac-sim/
- Affordance Learning: https://arxiv.org/abs/2110.04934

---

Difficulty: ✭✭✭✭ | Duration: 5 hours | Capstone Stage 4
