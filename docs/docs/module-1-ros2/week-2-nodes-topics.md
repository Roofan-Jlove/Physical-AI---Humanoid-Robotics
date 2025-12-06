---
sidebar_position: 3
---

# Week 2: Services, Actions & Multi-Node Systems

## Overview

Week 2 expands beyond publish-subscribe to cover synchronous communication patterns (services) and long-running tasks (actions), enabling complex robotic workflows.

## Learning Objectives

- Implement ROS 2 services for synchronous request-reply
- Create action servers and clients for long-running tasks
- Build multi-node ROS 2 systems with coordinated behavior
- Use launch files to orchestrate multiple nodes

## Part 1: Services

Services enable synchronous request-reply communication. Client waits for response.

### Create a Service Server

```python
import rclpy
from rclpy.node import Node
from example_interfaces.srv import AddTwoInts

class MinimalService(Node):
    def __init__(self):
        super().__init__('add_service')
        self.srv = self.create_service(
            AddTwoInts,
            'add_two_ints',
            self.add_callback
        )

    def add_callback(self, request, response):
        response.sum = request.a + request.b
        self.get_logger().info(f'{request.a} + {request.b} = {response.sum}')
        return response

def main(args=None):
    rclpy.init(args=args)
    node = MinimalService()
    rclpy.spin(node)
    rclpy.shutdown()

if __name__ == '__main__':
    main()
```

### Call a Service

```bash
ros2 service call /add_two_ints example_interfaces/srv/AddTwoInts "{a: 5, b: 3}"
```

## Part 2: Actions

Actions handle long-running tasks with feedback and result messages.

### Create an Action Server

```python
import rclpy
from rclpy.action import ActionServer
from rclpy.node import Node
from example_interfaces.action import Fibonacci

class MinimalAction(Node):
    def __init__(self):
        super().__init__('fibonacci_action')
        self._action_server = ActionServer(
            self,
            Fibonacci,
            'fibonacci',
            self.execute_callback
        )

    async def execute_callback(self, goal_handle):
        feedback_msg = Fibonacci.Feedback()
        sequence = [0, 1]
        
        for i in range(1, goal_handle.request.order):
            sequence.append(sequence[i] + sequence[i-1])
            feedback_msg.sequence = sequence
            goal_handle.publish_feedback(feedback_msg)
        
        goal_handle.succeed()
        result = Fibonacci.Result()
        result.sequence = sequence
        return result

def main(args=None):
    rclpy.init(args=args)
    node = MinimalAction()
    rclpy.spin(node)
    rclpy.shutdown()

if __name__ == '__main__':
    main()
```

## Part 3: Launch Files

Launch files orchestrate multiple nodes in YAML format.

**launch/multi_node.launch.py:**

```python
from launch import LaunchDescription
from launch_ros.actions import Node

def generate_launch_description():
    return LaunchDescription([
        Node(
            package='my_package',
            executable='publisher_node'
        ),
        Node(
            package='my_package',
            executable='subscriber_node'
        ),
    ])
```

**Run:**
```bash
ros2 launch my_package multi_node.launch.py
```

## Exercises

1. Create a service that returns the square of a number
2. Build an action that counts from 1 to N with feedback
3. Write a launch file for your Week 1 & 2 nodes

## Key Patterns

- **Services**: Synchronous RPC-style communication
- **Actions**: Asynchronous long-running tasks with feedback
- **Launch Files**: Declarative multi-node orchestration

## References

- https://docs.ros.org/en/humble/Tutorials/Beginner-Client-Libraries/
- https://docs.ros.org/en/humble/Concepts/About-Actions.html

---

Difficulty: ✭✭✭ | Duration: 4-5 hours | Phase: 3 - Content Architecture
