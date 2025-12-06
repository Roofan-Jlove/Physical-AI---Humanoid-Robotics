---
sidebar_position: 3
---

# Week 4: URDF & SDF - Robot Description Formats

## Overview

URDF and SDF are standardized formats for describing robots. This week teaches you to design custom robot models.

## Learning Objectives

- Write URDF (Unified Robot Description Format) files
- Convert URDF to SDF for Gazebo simulation
- Define robot kinematics and dynamics
- Create reusable robot components

## URDF Basics

**robot.urdf:**
```xml
<?xml version="1.0"?>
<robot name="my_robot">
  <link name="base_link">
    <visual>
      <geometry>
        <cylinder length="0.5" radius="0.2"/>
      </geometry>
    </visual>
    <collision>
      <geometry>
        <cylinder length="0.5" radius="0.2"/>
      </geometry>
    </collision>
  </link>
  
  <link name="wheel_link">
    <visual>
      <geometry>
        <cylinder length="0.1" radius="0.1"/>
      </geometry>
    </visual>
  </link>
  
  <joint name="wheel_joint" type="continuous">
    <parent link="base_link"/>
    <child link="wheel_link"/>
    <axis xyz="0 1 0"/>
  </joint>
</robot>
```

## SDF Enhancements

SDF extends URDF with physics, sensors, and plugins.

## Exercises

1. Model a 4-wheel robot with URDF
2. Add inertia properties
3. Simulate in Gazebo

## References

- https://wiki.ros.org/urdf/
- https://gazebosim.org/docs/

---

Difficulty: ✭✭✭ | Duration: 4 hours | Phase: 3 - Content Architecture
