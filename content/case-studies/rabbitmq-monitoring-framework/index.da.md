---
title: "Framework til overvågning af RabbitMQ"
date: 2022-06-01
draft: false
description: "Dynamisk, skemadrevet C#-bibliotek til realtidsovervågning af RabbitMQ-clusters med reflection til at generere typede metrikker fra Management API'et."
tags: ["C#", ".NET", "RabbitMQ", "Overvågning", "Observability", "Reflection", "API"]
og_image: "/images/og.png"
locale: "da_DK"
# standardized metadata for filtering/coloring
type: "implementation"
location: "Aarhus, Danmark"
organization: "Novicell"
languages: ["C#"]
frameworks: [".NET"]
tools: ["RabbitMQ Management API", "Reflection"]
domains: ["Observability", "Overvågning", "Messaging"]
offer: "product-build"
problem: "Teamet havde intet C#-værktøj til at følge et RabbitMQ-clusters helbred i realtid."
analysis: "RabbitMQ's management API beskriver selv sine metrikker, så modellerne kunne genereres ud fra det i stedet for at blive skrevet i hånden."
solution: "Et skrivebeskyttet C#-bibliotek, der bygger typede metrikker på kørselstidspunktet ud fra serverens metadata. Et proof of concept; det kom ikke i produktion."
---

**Overblik:**

Under min anden praktik hos Novicell identificerede jeg et væsentligt hul i værktøjerne, mens jeg gennemførte mit tidligere feasibility-studie af RabbitMQ til e-handelsworkloads med høj gennemstrømning. Selvom .NET-økosystemet tilbød modne biblioteker til at publicere og konsumere beskeder, manglede det et dedikeret C#-framework til **realtidsovervågning af RabbitMQ-clusterets helbred**. I lyset af de driftsmæssige krav til Novicells A-Team — som har ansvaret for platforme som Power.dk, Biltema.dk og Apoteket.dk — foreslog jeg et fokuseret projekt, der skulle designe et letvægts, skrivebeskyttet overvågningsbibliotek, som kunne give udviklere live-indsigt i RabbitMQ-clusterets metrikker.

{{< sketch name="gap" caption="Det identificerede hul i værktøjerne" >}}

**Udfordringer og tekniske forhindringer:**

RabbitMQ stiller et kraftfuldt management API til rådighed, men på det tidspunkt fandtes der intet C#-værktøj, der kunne konsumere dets metadata dynamisk eller oversætte dem til brugbare, strukturerede typer. Udfordringen var at bygge en overvågningsløsning, der kunne tilpasse sig RabbitMQ's skiftende specifikationer uden hårdkodede modeller og samtidig bevare stærk typning og kompatibilitet med .NET-applikationer. Projektet skulle desuden forblive strengt skrivebeskyttet, uden administrative funktioner eller skrivefunktioner, så dets funktion forblev sikker, gennemsigtig og fokuseret på observation.

{{< sketch name="comparison" caption="Traditionel over for dynamisk tilgang" >}}

**Handling og problemløsning:**

For at løse denne udfordring designede jeg et framework, der forespurgte RabbitMQ-serveren ved opstart, hentede den fulde JSON-specifikation af de tilgængelige metrikker og brugte reflection til at generere de tilsvarende datastrukturer dynamisk. Denne tilgang gjorde det muligt for biblioteket at opbygge sin egen interne model udelukkende på baggrund af serverens metadata, i samme ånd som moderne API-økosystemer bruger OpenAPI/Swagger-dokumenter til skemadrevet kodegenerering. Resultatet var en minimal, men fleksibel arkitektur, der kunne parse enhver metrik, clusteret stillede til rådighed — uden at kræve manuelle opdateringer eller foruddefinerede klasser.

{{< sketch name="architecture" caption="Dynamisk, skemadrevet arkitektur" >}}

**Kompetencer og nyskabelser:**

Projektet viste min evne til at kombinere arkitektonisk indsigt med avancerede runtime-teknikker. Implementeringen af dynamisk typegenerering krævede en dyb forståelse af RabbitMQ's management API, parsing af JSON-skemaer, reflection og de begrænsninger, der følger med at designe sikre, skrivebeskyttede grænseflader. Selvom løsningen konceptuelt lå på linje med moderne standarder, blev den bygget helt fra bunden, skræddersyet til Novicells driftsbehov og designet til at kunne integreres gnidningsfrit i interne diagnostiske arbejdsgange eller udviklerværktøjer.


{{< sketch name="framework" caption="Frameworkets designprincipper" >}}

**Konklusion og effekt:**

Selvom overvågningsframeworket i sidste ende ikke gik videre til produktionsbrug, opfyldte det målene for min praktik og min eksamen. Det gav en klar demonstration af, hvordan RabbitMQ’s management API kan udnyttes til observability i realtid, og udgjorde et proof of concept for dynamiske, skemadrevne værktøjer i .NET. Projektet styrkede yderligere min forståelse af overvågning af distribuerede systemer, runtime-introspektion og fleksibelt biblioteksdesign — og bidrog samtidig med værdifuld indsigt i, hvordan Novicell fremover kunne gribe intern RabbitMQ-observability an.
