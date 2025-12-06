---
sidebar_position: 4
---

# Isaac Sim Troubleshooting

## GPU Issues

**Issue**: Isaac Sim fails to load

**Solution**: Verify NVIDIA GPU:
```bash
nvidia-smi
glxinfo | grep -i nvidia
```

## Sensor Issues

**Issue**: Camera/LiDAR data not appearing in ROS 2

**Solution**:
- Check sensor assignment to articulation
- Verify isaac_ros bridge is running
- Monitor topic publication:
```bash
ros2 topic echo /camera/image_raw
```

## Performance Issues

**Issue**: Low FPS in simulation

**Solutions**:
- Reduce physics substeps
- Lower render resolution
- Disable ray tracing during development

## ROS 2 Integration

**Issue**: Isaac ROS packages not found

```bash
# Install isaac_ros packages
sudo apt install ros-humble-isaac-ros-*

# Verify installation
python3 -c "from isaac_ros import *"
```

---

See: https://docs.nvidia.com/isaac-sim/
