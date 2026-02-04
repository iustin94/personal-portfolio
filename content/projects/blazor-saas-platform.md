---
title: "SaaS Platform for Financial Workflows"
date: 2024-01-01
draft: false
description: "Enterprise-grade financial SaaS platform built with C# and Blazor, featuring a custom rule-based simulation engine for small businesses and entrepreneurs."
tags: ["C#", "Blazor", ".NET", "SaaS", "Finance", "Docker", "Simulation", "EF Core"]
og_image: "/images/og.png"
# standardized metadata for filtering/coloring
type: "implementation"
location: "Remote / Hetzner (DE)"
organization: "Independent / Entrepreneurial"
languages: ["C#"]
frameworks: [".NET", "Blazor", "EF Core"]
tools: ["Docker", "Docker Compose"]
domains: ["SaaS", "Finance", "Simulation"]
---

**Overview:**

This project began as an entrepreneurial collaboration with a former colleague who worked closely with small and micro‑businesses as an accountant. Through his experience, he observed a consistent gap in the market: individuals, one‑person companies, and small enterprises lacked access to high‑quality financial and accounting tools that matched the robustness of enterprise‑grade software, yet at a price point they could afford. We set out to build a SaaS platform that delivered the same—or better—quality of functionality and engineering excellence typically reserved for large organizations, while keeping operational costs extraordinarily low. The platform was developed end‑to‑end using C# and Blazor, designed to support modern accounting workflows with the reliability, clarity, and extensibility expected of professionally engineered systems.

![Market Gap](/images/saas-platform/saas_market_gap.svg)

**Challenges and Technical Hurdles:**

The real challenge of this project was not a single technical obstacle but the simultaneous management of many complex, interdependent concerns. These included architecting a maintainable multi‑tenant system, evolving a solid domain model for financial processes, ensuring data integrity across interlinked accounting entities, optimizing costs on a self‑hosted Hetzner infrastructure, and handling incremental migrations through multiple .NET versions—from .NET 7 to 10. The greatest difficulty lay in striking the right balance: addressing each of these areas with sufficient rigor without over‑engineering any one component, all while continuously refining the business domain model into a stable, extensible, SOLID‑compliant foundation.

![Technical Challenges](/images/saas-platform/saas_challenges.svg)

**Action and Problem-Solving:**

Across several years, I iteratively designed and implemented the platform's core domain logic, rewriting and strengthening it multiple times as new business insights emerged. This included building essential modules for tenant management, accounting structures, reporting, and workflow logic. The platform was engineered for minimal operational cost, running on a self‑hosted VPS with Docker and Docker Compose to ensure reproducibility, environmental control, and GDPR compliance. One of the most significant engineering achievements was the development of a custom **rule‑based simulation engine**. Inspired by previous academic work and informed by practical domain constraints, I designed a stateless, functional simulation engine capable of modeling financial scenarios using declarative rules. Although frameworks like SimSharp existed, they were far too complex for the intended use case. This engine allowed users—and the platform itself—to generate projections, evaluate financial contexts, and produce consistent simulation outputs grounded in a clean modeling abstraction.

![Simulation Engine](/images/saas-platform/saas_simulation.svg)

**Skills and Innovations:**

This project represents one of the most technically demanding and multifaceted endeavours of my career. It required full‑stack development across C#, Blazor, EF Core, containerized infrastructure, GDPR‑aware hosting, and the design of a fully custom financial domain model. Through this work, I deepened my architectural judgment, strengthened my ability to translate business needs into formal domain structures, and expanded my experience with simulation modeling in real‑world applications. The creation of the rule‑based engine further demonstrated the value of applying ideas from research to practical product development—showing how academically grounded concepts can solve real business problems when framed correctly.

![Platform Architecture](/images/saas-platform/saas_architecture.svg)

**Conclusion and Impact:**

The platform has evolved through every major stage—from conceptual design, to multiple architectural iterations, to a stable prototype—and is now transitioning toward a commercialization‑ready product. It stands as a long‑term entrepreneurial project grounded in real market needs and supported by principled engineering. While still under active development, it demonstrates how enterprise‑level quality, innovation, and reliability can be delivered at minimal cost by a small but dedicated team. The project continues to shape my professional philosophy: that high‑quality software engineering, when guided by solid principles and clear intent, can meaningfully elevate the tools available to small businesses and independent entrepreneurs.

![Platform Evolution](/images/saas-platform/saas_evolution.svg)
