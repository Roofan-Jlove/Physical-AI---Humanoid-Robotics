---
sidebar_position: 2
---

# Workstation Setup - Ubuntu 22.04 + GPU

## Prerequisites

- Ubuntu 22.04 LTS (fresh or existing installation)
- NVIDIA GPU (RTX 4060 Ti or equivalent)
- 16 GB RAM (minimum)
- 100 GB disk space (for development tools)

## Step 1: Update System

```bash
sudo apt update && sudo apt upgrade -y
sudo apt install build-essential git wget curl -y
```

## Step 2: Install NVIDIA Driver

```bash
# Install NVIDIA driver (version 525+)
sudo apt install nvidia-driver-525

# Verify
nvidia-smi
```

## Step 3: Install CUDA and cuDNN

```bash
# CUDA Toolkit 11.8+
sudo apt install nvidia-cuda-toolkit

# cuDNN 8.6+
# Download from: https://developer.nvidia.com/cudnn
```

## Step 4: Install ROS 2 Humble

See [Module 1 Week 1](/docs/module-1-ros2/week-1-intro) for ROS 2 installation.

## Step 5: Install Gazebo and Isaac Sim

```bash
# Gazebo
sudo apt install gz-sim

# Isaac Sim (requires registration)
# Download: https://developer.nvidia.com/isaac-sim
```

## Verification

```bash
# Verify GPU
cuda-10.0 --version

# Verify ROS 2
ros2 --version

# Verify Gazebo
gz sim --version
```

## References

- NVIDIA Driver: https://www.nvidia.com/Download/index.aspx
- CUDA: https://developer.nvidia.com/cuda-toolkit
- cuDNN: https://developer.nvidia.com/cudnn

---

Duration: 1-2 hours
