---
sidebar_position: 2
---

# Week 1: ROS 2 Introduction & Environment Setup

## Overview

This week establishes your foundation in ROS 2, setting up your development environment and creating your first ROS 2 node.

## Learning Objectives

- Install ROS 2 Humble on Ubuntu 22.04 LTS
- Create and configure a ROS 2 workspace
- Develop a simple ROS 2 publisher node in Python
- Use ROS 2 command-line tools for system inspection

## Part 1: ROS 2 Architecture

ROS 2 uses a **distributed publish-subscribe architecture** where:
- **Nodes**: Independent processes that publish/subscribe to topics
- **Topics**: Named communication channels for message flow
- **DDS**: Middleware handling all networking and serialization
- **Workspace**: Directory structure for organizing packages

## Part 2: Installation

```bash
# Install ROS 2 Humble Desktop
sudo apt install ros-humble-desktop-full

# Create and setup workspace
mkdir -p ~/ros2_ws/src
cd ~/ros2_ws
colcon build
source ~/ros2_ws/install/setup.bash
```

## Part 3: Your First Node

Create `~/ros2_ws/src/my_first_node/publisher_node.py`:

```python
import rclpy
from rclpy.node import Node
from std_msgs.msg import String

class MinimalPublisher(Node):
    def __init__(self):
        super().__init__('minimal_publisher')
        self.publisher_ = self.create_publisher(String, 'topic', 10)
        self.timer_ = self.create_timer(0.5, self.timer_callback)
        self.counter_ = 0

    def timer_callback(self):
        msg = String()
        msg.data = f'Hello ROS 2! Count: {self.counter_}'
        self.publisher_.publish(msg)
        self.get_logger().info(f'Publishing: "{msg.data}"')
        self.counter_ += 1

def main(args=None):
    rclpy.init(args=args)
    node = MinimalPublisher()
    try:
        rclpy.spin(node)
    except KeyboardInterrupt:
        pass
    finally:
        node.destroy_node()
        rclpy.shutdown()

if __name__ == '__main__':
    main()
```

Run: `python3 publisher_node.py`

## Part 4: System Inspection

```bash
ros2 node list       # List all nodes
ros2 topic list      # List all topics
ros2 topic echo /topic  # Display topic messages
```

## Exercises

1. Modify publisher to publish at 2 Hz
2. Create a subscriber that counts messages

## Key Concepts

- **Distributed**: Each node runs independently
- **Loosely Coupled**: Publishers don't know subscribers
- **Type-Safe**: Message types prevent mismatches

## References

- https://docs.ros.org/en/humble/
- https://docs.ros.org/en/humble/Tutorials/Beginner-Client-Libraries/

---

Difficulty: ✭✭☆ | Duration: 3-4 hours | Phase: 3 - Content Architecture
