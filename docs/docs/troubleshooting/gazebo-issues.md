---
sidebar_position: 3
---

# Gazebo Troubleshooting

## Physics Simulation Issues

**Issue**: Unrealistic robot behavior in simulation

**Solutions**:
- Verify inertia properties in URDF
- Check friction coefficients
- Adjust timestep (typically 0.001s)
- Use Bullet physics engine (default)

## Rendering Issues

**Issue**: Gazebo very slow or not rendering

**Solution**: Check GPU acceleration:
```bash
gz sim -v 4  # Verbose logging
glxgears     # Test OpenGL
```

## ROS 2 Bridge Issues

**Issue**: Robot doesn't respond to commands

**Solution**: Verify bridge is running:
```bash
# Check gazebo_ros bridge
ros2 node list | grep gazebo_ros_node
```

---

See: https://gazebosim.org/docs/
