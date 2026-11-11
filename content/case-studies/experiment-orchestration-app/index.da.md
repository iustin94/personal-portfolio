---
title: "App til orkestrering af eksperimenter"
date: 2018-06-01
draft: false
description: "App til synkronisering af biometriske data i realtid, bygget med C# og WPF til kognitionsforskning i pulssynkronisering under fælles aktiviteter."
tags: ["C#", "WPF", "Biometri", "Kognitionsvidenskab", "Realtid", "Datasynkronisering"]
og_image: "/images/og.png"
locale: "da_DK"
# standardized metadata for filtering/coloring
type: "implementation"
location: "Aarhus, Danmark"
organization: "Cognition and Behavior Laboratory"
languages: ["C#"]
frameworks: ["WPF"]
tools: ["Wii Remotes", "Audio Recording"]
domains: ["Kognitionsvidenskab", "Biometri", "Eksperimenter"]
offer: "product-build"
problem: "Forskere ville teste, om pulsen synkroniseres under fælles aktiviteter, og havde brug for, at dataene blev opsamlet i takt."
analysis: "Pulsmålere, Wii-fjernbetjeninger og mikrofoner leverer hver især data i deres eget tempo, så datastrømmene skulle bringes på linje i tid."
solution: "En C#/WPF-applikation med en samtidig opsamlingsmodel, der optager alle strømme sammen. Selve eksperimentet blev aflyst af budgetmæssige årsager."
---

**Overblik:**

Som led i min praktik på Cognition and Behavior Laboratory i Aarhus fik jeg til opgave at udvikle en softwareløsning, der skulle teste hypotesen om, at menneskers puls synkroniseres under fælles aktiviteter. I projektet skulle deltagerne gennemføre både et spil og en stemmeopgave, og målet var at opsamle synkroniserede biometriske data.

{{< sketch name="setup" caption="Forsøgsopstilling" >}}

**Udfordringer og tekniske forhindringer:**

En af de vigtigste udfordringer var at sikre datasynkronisering i realtid på tværs af flere strømme – pulsmålere, Wii-fjernbetjeninger og lydoptagelser. Teknologistakken, som bestod af C# og WPF, var ikke i sig selv designet til applikationer med høj gennemstrømning og lav latenstid, så jeg måtte tænke kreativt.

{{< sketch name="constraints" caption="Tekniske begrænsninger" >}}

**Handling og problemløsning:**

For at løse disse udfordringer implementerede jeg en specialudviklet løsning, der brugte Wii-fjernbetjeningerne som inputenheder og omsatte deres accelerometerdata til markørbevægelser på skærmen. Jeg designede også en samtidig trådmodel, der sikrede, at data fra alle kilder var præcist synkroniseret. Til lydoptagelsen integrerede jeg almindelige mikrofoner og sikrede minimal latenstid på trods af det komplekse datamiljø.

{{< sketch name="synchronization" caption="Datasynkronisering" >}}

**Kompetencer og nyskabelser:**

Projektet viste min evne til at tilpasse mig og tænke nyt under begrænsninger. Jeg brugte mine kompetencer i C# og WPF til at skabe et responsivt, synkroniseret system, hvor de tekniske krav til realtidsdata blev afvejet mod teknologiens begrænsninger.

{{< sketch name="innovation" caption="Nytænkning under begrænsninger" >}}

**Konklusion og effekt:**

Selvom eksperimentet ikke blev gennemført på grund af budgetbegrænsninger, lagde projektet et vigtigt grundlag for fremtidig forskning. Det viste min evne til selvstændigt at løse komplekse problemer, tænke nyt under begrænsninger og levere tekniske løsninger af høj kvalitet.
