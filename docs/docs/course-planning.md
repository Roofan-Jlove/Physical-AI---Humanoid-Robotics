---
sidebar_position: 1.5
---

# Course Planning Guide for Instructors

## Overview

This guide helps instructors adapt the Physical AI & Humanoid Robotics curriculum to their teaching context. The material is designed for flexibility—use the complete 13-week sequence, or select modules based on your needs.

## Quick Reference: Module Overview

| Module | Duration | Focus | Prerequisites | Difficulty |
|--------|----------|-------|---|---|
| **Module 1** | 2 weeks | ROS 2 Foundations | Linux basics | ✭✭ |
| **Module 2** | 4 weeks | Simulation & Digital Twins | Module 1 | ✭✭✭ |
| **Module 3** | 4 weeks | Advanced Perception | Module 2 | ✭✭✭✭ |
| **Module 4** | 3 weeks | VLA Systems | Module 3 | ✭✭✭✭✭ |

## Module 1: ROS 2 Foundations (2 weeks)

**Week 1: ROS 2 Introduction**
- Duration: 3-4 hours
- Learning Arc: Architecture → Installation → First Node
- Activities: Live installation, hands-on publisher node
- Assessment: Students create functioning ROS 2 publisher

**Week 2: Services, Actions & Multi-Node**
- Duration: 4-5 hours
- Learning Arc: Services → Actions → Launch Files
- Activities: Service server/client, action implementation
- Assessment: Multi-node system with coordinated communication

### Instructor Tips for Module 1

- **Pacing**: Recommend 1 week per session if students are new to Linux
- **Hardware**: Works on any Linux system (no GPU required)
- **Engagement**: Use real robot examples (Boston Dynamics Spot, humanoid aspirations)
- **Debugging**: Common issue: forgetting to source ROS 2 setup (address in orientation)

---

## Module 2: Simulation & Digital Twins (4 weeks)

**Week 3: Gazebo Basics**
- Duration: 4-5 hours
- Requirements: GPU recommended (Gazebo CPU fallback available)
- Learning Arc: World files → Physics → Robot models

**Week 4: URDF & SDF**
- Duration: 4 hours
- Hands-On: Design 4-wheel robot with custom inertia

**Week 5: Unity Robotics (Optional)**
- Duration: 3 hours
- Can be skipped for fast-track, recommended for visualization-heavy courses

**Week 6: Digital Twin Architecture**
- Duration: 4 hours
- Capstone Connection: Introduces sim-to-real validation concepts

### Instructor Tips for Module 2

- **Hardware Path**: If GPU unavailable, use cloud simulator (AWS g4dn instance) or skip to Module 3
- **Engagement**: Show videos of sim-to-real transfer failures (motivates accurate simulation)
- **Assessment**: Have students export robot model and compare real vs. simulated behavior

---

## Module 3: Advanced Perception (4 weeks)

**Week 7-10: Isaac Sim + Perception**
- Duration: 16-20 hours total
- Requirements: NVIDIA GPU (RTX 4060 Ti or Jetson Orin)
- Learning Arc: Photorealistic sim → Sensors → Perception pipeline

### Instructor Tips for Module 3

- **Prerequisites**: Students must complete Module 1 & 2 first
- **Hardware Intensive**: Consider Jetson Orin if workstations limited
- **Real-World Connection**: Show live Isaac Sim + real robot videos

---

## Module 4: Vision-Language-Action Systems (3 weeks)

**Week 11-13: VLA + Autonomous Workflows**
- Duration: 16 hours total
- Learning Arc: Language models → Grounding → Autonomous execution
- Capstone Integration: Full 5-stage pipeline assembly

### Instructor Tips for Module 4

- **Depth vs. Breadth**: Can survey architectures (1 week) or deep-dive implementation (3 weeks)
- **LLM Access**: Use free tiers (OpenAI API, Google Gemini) or local models

---

## Pre-Course Checklist

Before starting, verify:

- [ ] **Hardware**: Workstations, Jetson devices, or cloud access configured
- [ ] **Software**: Ubuntu 22.04, ROS 2 Humble, dependencies pre-installed on all machines
- [ ] **Network**: Students can access external APIs (if using cloud LLMs)
- [ ] **Support**: TA/tutors available for troubleshooting
- [ ] **Syllabus**: Integrate curriculum into your course schedule

---

## Suggested Course Configurations

### Config A: Full 13-Week Curriculum
- Week 1-2: Module 1 (ROS 2)
- Week 3-6: Module 2 (Simulation)
- Week 7-10: Module 3 (Perception)
- Week 11-13: Module 4 (VLA)
- **Capstone**: Weeks 14+

### Config B: Fast-Track (8 weeks, no Module 2)
- Week 1-2: Module 1 (ROS 2)
- Week 3-6: Module 3 (Perception, skip Gazebo intro)
- Week 7-8: Module 4 (VLA overview)
- **Trade-off**: Students miss simulation fundamentals

### Config C: Simulation-Heavy (10 weeks, Module 2 expanded)
- Week 1-2: Module 1 (ROS 2)
- Week 3-8: Module 2 (Gazebo + Unity deep-dive)
- Week 9-10: Module 3 (Isaac Sim overview)
- **Trade-off**: No VLA systems coverage

---

## Assessment Strategy

### Per-Module Assessments

| Module | Assessment | Rubric |
|--------|-----------|--------|
| Module 1 | ROS 2 pub/sub system | Works, documented, tested |
| Module 2 | Simulated robot model + sim-to-real validation | Accuracy, physics tuning, documentation |
| Module 3 | Perception pipeline | Real-time performance, sensor fusion, accuracy |
| Module 4 | Autonomous task execution | End-to-end workflow, error handling |

### Capstone Project

**Final Deliverable**: Autonomous humanoid robot executing a complex task:
- Voice input → Task planning → Navigation → Manipulation
- Simulation validation + Real robot deployment (if available)
- Written report + video demonstration

---

## Student Engagement Strategies

1. **Guest Speakers**: Roboticists from industry or academia
2. **Lab Demos**: Show humanoid robots in action (videos or live)
3. **Peer Learning**: Team projects for capstone
4. **Real Hardware**: Deploy on Jetson if available for final weeks
5. **Competitions**: Challenge students to optimize speed/accuracy

---

## Troubleshooting Common Instructor Challenges

**Q: Some students lack Linux experience**
- A: Extend Module 1 with Linux basics (1 week), provide setup scripts

**Q: GPU resources limited**
- A: Use cloud services (AWS, GCP), CPU-only Gazebo, or rotate hardware access

**Q: Students need more depth in one area**
- A: This is a survey curriculum; reference advanced materials in each module for extension

**Q: No access to humanoid robots**
- A: Entire curriculum works in simulation; capstone can be simulation-only

---

## References

- **ROS 2 Documentation**: https://docs.ros.org/en/humble/
- **Gazebo Documentation**: https://gazebosim.org/docs/
- **Isaac Sim Documentation**: https://docs.nvidia.com/isaac/
- **OpenVLA (VLA Model)**: https://github.com/openvla/openvla

---

**Instructor Resources**: For solutions, slides, and additional materials, refer to the Contributing Guide (to be added in Phase 4).

**Questions?** Contact the curriculum maintainers via GitHub Issues.
