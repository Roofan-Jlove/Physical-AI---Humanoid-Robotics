---
sidebar_position: 1
---

# Hardware Setup Overview

## Supported Platforms

This curriculum supports three hardware deployment paths:

### 1. Workstations (Primary)
- **OS**: Ubuntu 22.04 LTS
- **GPU**: NVIDIA RTX 4060 Ti or equivalent
- **Use Case**: Development, simulation, learning

### 2. Edge Devices (Deployment)
- **Platform**: NVIDIA Jetson Orin series
- **Options**: Orin Nano, Orin NX, Orin AGX
- **Use Case**: Onboard robot control

### 3. Real Humanoid Robots (Optional)
- **Options**: Boston Dynamics Atlas, Tesla Bot, open-source designs
- **Integration**: Via ROS 2 and standard interfaces

## Selection Guide

| Path | Cost | GPU | Use Cases |
|------|------|-----|-----------|
| Workstation | $ | Required | Development, learning |
| Jetson Orin | $$ | Native | Deployment, edge AI |
| Real Robot | $$$ | Onboard | Production robotics |

## Prerequisites

- Linux command line familiarity
- Basic networking knowledge
- GPU driver setup experience (for workstations)

## Next Steps

- [Workstation Setup](./workstation-setup.md)
- [Jetson Setup](./jetson-setup.md)
- [Humanoid Robot Integration](./humanoid-robots.md)
