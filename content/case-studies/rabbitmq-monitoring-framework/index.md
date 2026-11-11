---
title: "RabbitMQ Monitoring Framework"
date: 2022-06-01
aliases: ["/projects/rabbitmq-monitoring-framework/"]
draft: false
description: "Dynamic schema-driven C# library for real-time RabbitMQ cluster monitoring, using reflection to generate typed metrics from the Management API."
tags: ["C#", ".NET", "RabbitMQ", "Monitoring", "Observability", "Reflection", "API"]
og_image: "/images/og.png"
locale: "en_US"
# standardized metadata for filtering/coloring
type: "implementation"
location: "Aarhus, Denmark"
organization: "Novicell"
languages: ["C#"]
frameworks: [".NET"]
tools: ["RabbitMQ Management API", "Reflection"]
domains: ["Observability", "Monitoring", "Messaging"]
offer: "product-build"
problem: "The team had no C# tooling to watch the health of a RabbitMQ cluster in real time."
analysis: "RabbitMQ's management API describes its own metrics, so the models could be generated from it instead of written by hand."
solution: "A read-only C# library that builds typed metrics at runtime from the server's metadata. A proof of concept; it did not go to production."
---

**Overview:**

During my second internship at Novicell, I identified a significant tooling gap while conducting my earlier feasibility study on RabbitMQ for high‑throughput e‑commerce workloads. Although the .NET ecosystem offered mature libraries for publishing and consuming messages, it lacked a dedicated C# framework for **real‑time monitoring of RabbitMQ cluster health**. Given the operational demands of Novicell's A‑Team—responsible for platforms such as Power.dk, Biltema.dk, and Apoteket.dk—I proposed a focused project to design a lightweight, read‑only monitoring library capable of providing developers with live insights into RabbitMQ cluster metrics.

{{< sketch name="gap" caption="Identified Tooling Gap" >}}

**Challenges and Technical Hurdles:**

RabbitMQ exposes a powerful management API, but at the time no C# tooling existed to consume its metadata dynamically or translate it into usable, structured types. The challenge was to build a monitoring solution that could adapt to RabbitMQ's evolving specifications without hard‑coded models, while maintaining strong typing and compatibility with .NET applications. The project also had to remain strictly read‑only, offering no administrative or write capabilities, ensuring that its function remained safe, transparent, and observably focused.

{{< sketch name="comparison" caption="Traditional vs Dynamic Approach" >}}

**Action and Problem-Solving:**

To address this challenge, I designed a framework that queried the RabbitMQ server at startup, retrieved the full JSON specification of available metrics, and used reflection to generate the corresponding data structures dynamically. This approach allowed the library to construct its own internal model based entirely on the server's metadata, similar in spirit to how modern API ecosystems use OpenAPI/Swagger documents for schema-driven code generation. The result was a minimal yet flexible architecture capable of parsing any metric the cluster made available—without requiring manual updates or predefined classes.

{{< sketch name="architecture" caption="Dynamic Schema-Driven Architecture" >}}

**Skills and Innovations:**

This project demonstrated my ability to combine architectural insight with sophisticated runtime tooling techniques. Implementing dynamic type generation required a deep understanding of RabbitMQ's management API, JSON schema parsing, reflection, and the constraints of designing safe, read‑only interfaces. While conceptually aligned with modern standards, the solution was built entirely from scratch, tailored to Novicell's operational needs, and designed to be seamlessly integrated into internal diagnostic workflows or developer tools.


{{< sketch name="framework" caption="Framework Design Principles" >}}

**Conclusion and Impact:**

Although the monitoring framework ultimately did not proceed into production use, it successfully fulfilled the goals of my internship and academic examination. It provided a clear demonstration of how RabbitMQ’s management API could be leveraged for real‑time observability and offered a proof‑of‑concept for dynamic schema‑driven tooling in .NET. The project further solidified my understanding of distributed system monitoring, runtime introspection, and flexible library design—while contributing meaningful insights into how Novicell might approach internal RabbitMQ observability in the future.
