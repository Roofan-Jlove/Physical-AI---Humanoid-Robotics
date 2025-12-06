---
sidebar_position: 2
---

# Stage 1: Voice Input - Natural Language Commands

## Overview

Stage 1 enables the humanoid robot to accept voice commands from users, converting speech to actionable text instructions.

## Architecture

```
Microphone Audio
    ↓
Speech Recognition (Whisper)
    ↓
Text Output
    ↓
Intent Classification
    ↓
Structured Commands
```

## Implementation

```python
import speech_recognition as sr
import rclpy

recognizer = sr.Recognizer()
with sr.Microphone() as source:
    audio = recognizer.listen(source)
    command_text = recognizer.recognize_google(audio)
    # Pass to Stage 2 (Planning)
```

## Key Components

- **Audio Input**: Microphone or network stream
- **Speech Recognition**: Whisper, Google Speech-to-Text
- **Intent Parsing**: Extract commands from text
- **Error Handling**: Confirm unclear commands

## Testing

1. Test with clean audio
2. Test in noisy environments
3. Measure latency (target: less than 1 second)

## References

- Whisper: https://github.com/openai/whisper
- ROS 2 Audio: https://docs.ros.org/en/humble/

---

Difficulty: ✭✭ | Duration: 2-3 hours | Capstone Stage 1
