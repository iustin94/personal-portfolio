---
title: "Feasibility Study of RabbitMQ"
date: 2022-01-01
draft: false
description: "Scientific investigation of RabbitMQ for high-throughput e-commerce platforms handling Black Friday and seasonal traffic spikes at Denmark's largest online retailers."
tags: ["RabbitMQ", "E-commerce", "Distributed Systems", "Messaging", "Scalability", "Docker"]
og_image: "/images/og.png"
# standardized metadata for filtering/coloring
type: "inquiry"
location: "Aarhus, Denmark"
organization: "Novicell"
languages: []
frameworks: []
tools: ["RabbitMQ", "Docker"]
domains: ["E-commerce", "Scalability", "Distributed Systems", "Messaging"]
---

**Overview:**

During my internship at Novicell, I was part of the A‑Team, the department responsible for maintaining and developing the solutions for three of Denmark's largest e‑commerce platforms: **Power.dk** (a major consumer electronics retailer), **Biltema.dk** (one of the country's biggest consumer goods chains), and **Apoteket.dk** (a large national pharmacy platform). These systems experience extreme traffic spikes during events such as Black Friday and the Christmas shopping season. To support the scalability demands of these high‑throughput environments, I was tasked with a structured, scientific investigation into whether **RabbitMQ** could serve as a reliable core technology for message processing and load distribution. The goal was to determine its architectural suitability and ensure that the company's systems could handle peak seasonal workloads without service degradation.

![Denmark's Largest E-Commerce Platforms](/images/rabbitmq-feasability-study/rabbitmq_platforms.svg)

**Challenges and Technical Hurdles:**

RabbitMQ's performance varies significantly across different clustering configurations, replication strategies, and message-processing patterns. One of the central challenges was determining whether the architectural design proposed by the Novicell architecture team would scale effectively under extreme load. With peak periods generating hundreds of thousands of requests within minutes, the stakes were high: any performance bottleneck could impact the shopping experience for some of the largest consumer websites in Denmark. Understanding how RabbitMQ behaved under sustained stress and identifying hidden architectural risks were crucial parts of the investigation.

![Investigation Evolution](/images/rabbitmq-feasability-study/rabbitmq_evolution.svg)

**Action and Problem-Solving:**

I began by establishing a baseline through simple RabbitMQ programs running on a single node. Novicell provided multiple physical machines, allowing me to expand the testing environment into multi-node clusters. I used Docker—still relatively new at the time—to automate deployments, enable rapid cluster reconfiguration, and ensure reproducible test environments. As I compared simple test setups with the more complex architectural pattern proposed for production use, a critical discovery emerged: the planned design **reduced throughput by two entire orders of magnitude**. A configuration capable of processing millions of messages dropped to roughly **40,000** under the pattern, despite identical hardware and environment. This bottleneck was traced to specific architectural constraints that limited RabbitMQ's natural parallelism and delivery efficiency. I compiled these results and presented them directly to my manager and Novicell's head of architecture, providing clear guidance on where the design required adjustment.

![Critical Performance Discovery](/images/rabbitmq-feasability-study/rabbitmq_discovery.svg)

**Skills and Innovations:**

Beyond the internal investigation, my work led to significant external impact. As I encountered nuanced configuration challenges, I documented findings, posted detailed questions, and answered others on StackOverflow. Several of my posts became the most upvoted and widely referenced RabbitMQ entries at the time, briefly making me the **top‑ranking contributor in the RabbitMQ tag**. This visibility not only underscored the depth of the investigation but also demonstrated my ability to translate complex technical insights into clear, actionable guidance for the wider engineering community.

![Project Impact](/images/rabbitmq-feasability-study/rabbitmq_impact.svg)

**Conclusion and Impact:**

The feasibility study delivered a rigorous, evidence-supported evaluation of RabbitMQ’s capabilities and limitations. The discovery of a two-order-of-magnitude performance bottleneck allowed the architecture team to refine their design before implementation—preventing a major scalability issue for some of Denmark’s highest-traffic retail platforms. The project validated RabbitMQ as a viable technology when paired with efficient patterns and informed new architectural guidelines for message-driven solutions at Novicell. It also showcased my ability to conduct scientific investigations, work with distributed infrastructure, identify critical architectural risks, and communicate findings effectively to both organizational leadership and the global developer community.
