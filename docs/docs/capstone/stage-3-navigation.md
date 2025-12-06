---
sidebar_position: 4
---

# Stage 3: Navigation - Autonomous Movement

## Overview

Stage 3 enables the humanoid to navigate from its current location to task destinations.

## ROS 2 Navigation Stack

- **Planning**: Path planning (Nav2 Global Planner)
- **Localization**: AMCL, sensor fusion
- **Control**: Local trajectory planning
- **Monitoring**: Safety checks

## Implementation

```bash
# Deploy ROS 2 Navigation
ros2 launch nav2_bringup bringup_launch.py use_sim_time:=true

# Send goal
ros2 action send_goal /navigate_to_pose nav2_msgs/action/NavigateToPose "{pose: {...}}"
```

## Humanoid-Specific Challenges

- Bipedal balance maintenance
- Terrain adaptation
- Energy efficiency

## Exercises

1. Map indoor environment
2. Navigate to multiple waypoints
3. Handle dynamic obstacles

## References

- Nav2: https://docs.nav2.org/
- Humanoid Navigation: https://arxiv.org/abs/2202.12715

---

Difficulty: ✭✭✭✭ | Duration: 4-5 hours | Capstone Stage 3
