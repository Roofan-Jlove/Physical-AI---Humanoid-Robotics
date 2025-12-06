---
sidebar_position: 3
---

# Jetson Orin Setup - Edge AI Deployment

## Supported Models

- **Orin Nano**: 8 CUDA cores, 4 GB LPDDR5 (entry-level)
- **Orin NX**: 128 CUDA cores, 8 GB LPDDR5 (mid-range)
- **Orin AGX**: 275 CUDA cores, 32 GB LPDDR5 (advanced)

## Prerequisites

- Jetson Orin with Ubuntu 22.04 LTS (pre-installed)
- Power supply (15-20W for Nano, 25W+ for AGX)
- Network connectivity

## Step 1: Initial Setup

```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install ROS 2 Humble
sudo apt install ros-humble-desktop

# Source ROS 2
echo "source /opt/ros/humble/setup.bash" >> ~/.bashrc
```

## Step 2: NVIDIA JetPack Runtime

```bash
# Pre-installed: CUDA 11.8+, cuDNN 8.6+
# Verify:
nvcc --version
```

## Step 3: Isaac ROS Runtime

```bash
sudo apt install ros-humble-isaac-ros-*

# Verify
python3 -c "import torch; print(torch.cuda.is_available())"
```

## Performance Monitoring

```bash
# Monitor GPU/CPU
tegrastats

# Monitor temperature
cat /sys/devices/virtual/thermal/thermal_zone*/temp
```

## References

- Jetson Docs: https://docs.nvidia.com/jetson/
- JetPack: https://developer.nvidia.com/embedded/jetpack

---

Duration: 1 hour
