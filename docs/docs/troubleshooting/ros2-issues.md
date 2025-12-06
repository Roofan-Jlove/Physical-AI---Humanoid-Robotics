---
sidebar_position: 2
---

# ROS 2 Troubleshooting

## Topic/Service Communication Issues

**Issue**: Publisher publishes but subscriber doesn't receive

**Solutions**:
- Check topic name spelling (case-sensitive)
- Verify message types match
- Check QoS compatibility
- Ensure both nodes source ROS 2 setup

## Build Issues

**Issue**: `colcon build` fails

```bash
# Clean and rebuild
cd ~/ros2_ws
rm -rf build/ install/ log/
colcon build --symlink-install

# Check for dependency issues
rosdep install --from-paths src --ignore-src -r -y
```

## Workspace Issues

**Issue**: Installed packages not found

```bash
# Source workspace after build
source ~/ros2_ws/install/setup.bash

# Add to .bashrc for persistence
echo "source ~/ros2_ws/install/setup.bash" >> ~/.bashrc
```

## DDS Configuration

**Issue**: Multiple ROS 2 systems interfering

**Solution**: Isolate DDS domains:
```bash
export ROS_DOMAIN_ID=42  # Each system: unique ID 0-232
```

---

See: https://docs.ros.org/en/humble/Troubleshooting/
