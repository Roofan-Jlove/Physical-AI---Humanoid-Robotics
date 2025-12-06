---
sidebar_position: 2
---

# Week 3: Gazebo Basics & Physics Simulation

## Overview

This week introduces Gazebo 7+, the industry-standard open-source physics simulator for robotics. You'll learn to create simulation environments and simulate robot physics.

## Learning Objectives

- Install Gazebo and ROS 2 integration
- Understand Gazebo world files and physics engines
- Create simple robot models in Gazebo
- Integrate Gazebo with ROS 2 topics

## Part 1: Gazebo Installation

```bash
# Install Gazebo 7 (harmonic)
sudo apt install gz-sim

# Install ROS 2 Gazebo bridge
sudo apt install ros-humble-gazebo-ros-pkgs
```

## Part 2: Gazebo Worlds

A world contains environment, robots, and physics settings.

**world/empty.sdf:**
```xml
<?xml version="1.0" ?>
<sdf version="1.8">
  <world name="empty_world">
    <physics type="bullet">
      <gravity>0 0 -9.81</gravity>
    </physics>

    <model name="ground_plane">
      <link name="link">
        <collision name="collision">
          <geometry>
            <plane>
              <normal>0 0 1</normal>
            </plane>
          </geometry>
        </collision>
      </link>
    </model>
  </world>
</sdf>
```

## Part 3: Robot Models

SDF (Simulation Description Format) defines robots.

**robot.sdf:**
```xml
<?xml version="1.0" ?>
<sdf version="1.8">
  <model name="simple_robot">
    <link name="chassis">
      <inertial>
        <mass>1.0</mass>
      </inertial>
      <collision name="collision">
        <geometry>
          <box>
            <size>1 0.5 0.25</size>
          </box>
        </geometry>
      </collision>
      <visual name="visual">
        <geometry>
          <box>
            <size>1 0.5 0.25</size>
          </box>
        </geometry>
      </visual>
    </link>
  </model>
</sdf>
```

## Part 4: Running Simulations

```bash
# Launch Gazebo with world
gz sim worlds/empty.world

# Run with ROS 2 bridge
ros2 launch gazebo_ros gazebo.launch.py
```

## Exercises

1. Create a world with multiple objects
2. Simulate a simple box with physics
3. Inspect simulation via ROS 2 topics

## Key Concepts

- **SDF**: Standard robot description format
- **Physics Engines**: Bullet (default), ODE, DART
- **Real-Time Simulation**: Critical for robotics

## References

- https://gazebosim.org/docs/
- https://docs.ros.org/en/humble/Tutorials/Gazebo-Sim/

---

Difficulty: ✭✭✭ | Duration: 4-5 hours | Phase: 3 - Content Architecture
