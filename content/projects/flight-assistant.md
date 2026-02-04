---
title: "Drone Flight Assistant App"
date: 2021-01-01
draft: false
description: "Desktop application for drone-based satellite antenna testing, integrating flight path configuration, RF measurement processing, and GPS telemetry synchronization."
tags: ["Python", "Aerospace", "Drones", "RF", "GPS", "Telemetry", "Satellite"]
og_image: "/images/og.png"
# standardized metadata for filtering/coloring
type: "implementation"
location: "Odense, Denmark"
organization: "QuadSat"
languages: ["Python"]
frameworks: []
tools: ["GPS", "Telemetry", "RF Measurement", "Spectrum Analyzer"]
domains: ["Aerospace", "RF", "Drone Operations"]
---

**Overview:**

After completing my Master's degree, I transitioned from part‑time developer to full‑time Lead Software Engineer at QuadSat, a small but highly specialized company combining drone technology with RF measurement systems for satellite antenna testing. With only five employees at the time, I became responsible for architecting and implementing a new desktop application—later named the _Flight Assistant_—designed to support technicians in the field. The goal of the application was to provide a unified tool for configuring drone flight paths, processing RF measurement data from a proprietary payload, and synchronizing telemetry from both the drone and a GPS base station.

![Workflow: Field to Analysis](/images/quadsat/simple_workflow.svg)

**Challenges and Technical Hurdles:**

One of the largest challenges in developing the Flight Assistant was the fundamentally shifting nature of the product. Because QuadSat was in an active research and development phase, requirements evolved rapidly as the drone and payload technology matured. This meant the software could not be built around fixed assumptions; it had to be architected to absorb constant change with minimal disruption. Additionally, the data ingestion process relied on manual file transfers of GPS logs, flight telemetry, and RF spectrometry outputs—each produced by different instruments with varying formats and levels of reliability. Balancing these technical inconsistencies while maintaining a stable, user‑friendly desktop application required a design focused on flexibility, modularity, and fault tolerance.

![Challenge to Solution](/images/quadsat/simple_transformation.svg)

**Action and Problem-Solving:**

I designed and implemented the Flight Assistant from the ground up in Python, creating a modular framework capable of ingesting drone telemetry, GPS base‑station data, and measurement files from spectrum analyzers. The application provided tools for defining and uploading flight paths using specialized payload software, processing and aligning telemetry with RF data, and generating visualizations used for on-site diagnosis of antenna performance. As the sole software engineer initially—and later the team lead—I built the foundations of the codebase, established development conventions, and ensured the architecture could evolve as feature needs changed. This required anticipating future use cases, decoupling components to allow rapid iteration, and maintaining reliability despite limited resources.

![Flight Assistant Architecture](/images/quadsat/simple_architecture.svg)

**Skills and Innovations:**

In addition to hands-on development, I played a critical collaborative role. I served as the primary bridge between the drone researchers, RF engineers, and product owner, ensuring the software roadmap stayed aligned with technical capabilities and business priorities. This often meant mediating between competing constraints—for example, balancing the researchers' experimental needs with the requirements for stable field-usable tooling. As the team grew, I mentored student developers and supported robotics team members working on software-adjacent tasks, helping standardize practices across the company. My work strengthened both the product's technical foundation and the internal collaboration model between engineering and research.

![Technical Leadership Bridge](/images/quadsat/simple_leadership.svg)

**Conclusion and Impact:**

The Flight Assistant evolved into a central tool for field technicians, providing an integrated workflow for configuring flights, processing RF measurements, and diagnosing antenna performance. While some planned automations—such as wireless data transfer—were deferred due to resource prioritization, the solution delivered reliable, practical value within the operational constraints of an early‑stage research environment. The project demonstrated my ability to architect adaptable software in a rapidly evolving technical landscape, lead cross‑functional collaboration, and guide a product from concept to field-ready deployment in a highly specialized domain.
