---
title: "Enterprise Process Modeling Platform"
date: 2023-01-01
draft: false
# standardized metadata for filtering/coloring
type: "implementation"
location: "Copenhagen, Denmark"
organization: "Ramboll"
languages: ["C#"]
frameworks: [".NET", "EF Core"]
tools: ["DDD"]
domains: ["Enterprise", "Process Modeling", "Architecture"]
---

**Overview:**
During my time at Ramboll, I worked closely with the team responsible for maintaining a decade‑old Python/Django risk management platform used across several business units. Over the years, the system had accumulated significant technical debt, with inconsistent modules, tightly coupled logic, and architectural limitations inherent to the framework and language. As new enterprise‑level requirements emerged, it became increasingly clear that the legacy platform could no longer support scalable, type‑safe, and maintainable domain modeling. In response, leadership approved a greenfield initiative—internally referred to as the _Data Workbench_—aimed at building a modern enterprise process‑modeling platform informed by the lessons learned from maintaining the legacy codebase.

**Challenges and Technical Hurdles:**
The central challenge was designing a platform capable of supporting **user‑defined data models and dynamic business processes**—requirements that the Python/Django stack had struggled with due to its dynamic typing, fragmented architecture, and lack of robust domain modeling tools. Additionally, the complexity of enterprise workflows demanded type safety, consistent modeling semantics, and clear boundaries between subsystems. Building such a system from scratch required not only a new technology stack but also a disciplined architectural foundation that could scale as the platform evolved. Balancing these technical constraints with the ambiguity of early-stage product requirements created a demanding design environment.

**Action and Problem-Solving:**
I spearheaded the architectural design of the platform, drawing on Domain‑Driven Design principles and implementing the core structure using C# and EF Core. My work involved extensive research into modeling patterns and translating those concepts into concrete prototypes that demonstrated how user‑defined data models, validation rules, and tenant-specific configurations could be implemented in a strongly typed environment. I built initial implementations for the domain model, entity architecture, validation engine, EF Core strategies, API design, and early UI prototypes, ensuring each component aligned with a cohesive architectural vision. Throughout the process, I collaborated closely with the department’s technical lead, presenting trade-offs, clarifying motivations for design decisions, and helping prioritize the development roadmap based on practical feasibility and long-term maintainability.

**Skills and Innovations:**
This project required a blend of architectural rigor and exploratory design. I gained deep experience applying Domain‑Driven Design in practice, developing scalable data modeling strategies, and evaluating how strongly typed frameworks can support dynamic enterprise workflows. I also authored architectural guidelines outlining key decisions, patterns, and conventions, helping establish a foundation for future contributors. The role demanded close collaboration across technical and business perspectives, allowing me to influence high-level strategy while building tangible, working prototypes that shaped the direction of the project.

**Conclusion and Impact:**
The Data Workbench initiative laid the foundation for a next‑generation enterprise modeling platform, addressing long‑standing limitations of the legacy system and providing a scalable, maintainable architectural base for future development. My contributions—ranging from architectural research and prototyping to design leadership and stakeholder collaboration—played a central role in defining the platform’s technical direction. While the project remained in early development when I completed my work, it established a clear path forward and demonstrated the viability of a modern, strongly typed, domain‑driven alternative to the legacy Django solution.
