---
title: "Experiment Orchestration App"
date: 2018-06-01
draft: false
# standardized metadata for filtering/coloring
type: "implementation"
location: "Aarhus, Denmark"
organization: "Cognition and Behavior Laboratory"
languages: ["C#"]
frameworks: ["WPF"]
tools: ["Wii Remotes", "Audio Recording"]
domains: ["Cognitive Science", "Biometrics", "Experimentation"]
---

**Overview:**

As part of my internship at the Cognition and Behavior Laboratory in Aarhus, I was tasked with developing a software solution to test the hypothesis that people's heart rates synchronize during shared activities. The project involved participants engaging in both a game and a vocal task, with the aim of capturing synchronized biometric data.

**Challenges and Technical Hurdles:**

One of the key challenges was ensuring real-time data synchronization across multiple streams—heart rate monitors, Wii remotes, and audio recordings. The technology stack, which included C# and WPF, wasn’t inherently designed for high-throughput, low-latency applications, so I had to get creative.

**Action and Problem-Solving:**

To tackle these challenges, I implemented a custom solution to use the Wii remotes as input devices, translating their accelerometer data into cursor movement on the screen. I also designed a concurrent threading model to ensure that data from all sources was perfectly synchronized. For the audio recording, I integrated standard microphones, ensuring minimal latency despite the complex data environment.

**Skills and Innovations:**

This project showcased my ability to adapt and innovate under constraints. I leveraged my proficiency in C# and WPF to create a responsive, synchronized system, balancing the technical demands of real-time data with the limitations of the technology.

**Conclusion and Impact:**

While the experiment was not completed due to budget constraints, the project laid critical groundwork for future research. It highlighted my capacity to independently solve complex problems, innovate under constraints, and deliver high-quality technical solutions.
