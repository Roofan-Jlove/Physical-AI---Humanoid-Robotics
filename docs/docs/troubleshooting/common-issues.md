---
sidebar_position: 1
---

# Common Issues & Solutions

## Installation Problems

**Issue**: `ros2: command not found`

**Solution**: Ensure ROS 2 setup is sourced:
```bash
source /opt/ros/humble/setup.bash
echo "source /opt/ros/humble/setup.bash" >> ~/.bashrc
```

## Network Issues

**Issue**: Nodes can't discover each other across machines

**Solution**: Ensure DDS configuration:
```bash
export RMW_IMPLEMENTATION=rmw_fastrtps_cpp
export FASTRTPS_DEFAULT_PROFILES_FILE=/path/to/profiles.xml
```

## Performance Issues

**Issue**: High latency between publisher and subscriber

**Solution**: Check QoS (Quality of Service) settings:
```python
from rclpy.qos import QoSProfile, ReliabilityPolicy
qos = QoSProfile(reliability=ReliabilityPolicy.RELIABLE)
```

## Simulation Issues

**Issue**: Gazebo crashes or physics unrealistic

**Solution**: Verify physics engine and timestep:
```xml
<physics type="bullet">
  <max_step_size>0.001</max_step_size>
  <real_time_factor>1.0</real_time_factor>
</physics>
```

## GPU Issues

**Issue**: CUDA not detected in Isaac Sim

**Solution**: Verify NVIDIA driver:
```bash
nvidia-smi
python3 -c "import torch; print(torch.cuda.is_available())"
```

---

For more help: https://discourse.ros.org/
