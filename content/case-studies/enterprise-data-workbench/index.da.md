---
title: "Enterprise-platform til procesmodellering"
date: 2023-01-01
draft: false
description: "Greenfield-platform til enterprise-datastyring i C#/.NET og domain-driven design, som afløser et ældre Python/Django-system til risikostyring hos Rambøll."
tags: ["C#", ".NET", "EF Core", "DDD", "Enterprise", "Arkitektur", "Procesmodellering"]
og_image: "/images/og.png"
locale: "da_DK"
# standardized metadata for filtering/coloring
type: "implementation"
location: "København, Danmark"
organization: "Rambøll"
languages: ["C#"]
frameworks: [".NET", "EF Core"]
tools: ["DDD"]
domains: ["Enterprise", "Procesmodellering", "Arkitektur"]
offer: "architecture-modernisation"
problem: "En ti år gammel Python/Django-platform til risikostyring kunne ikke understøtte brugerdefinerede datamodeller og forretningsprocesser."
analysis: "Research i modelleringsmønstre og prototyper, der viste, hvordan brugerdefinerede modeller, valideringsregler og tenant-konfiguration fungerer i et stærkt typet system."
solution: "Arkitekturen og kernestrukturen i en ny C#/.NET-platform bygget på domain-driven design, med skriftlige arkitekturretningslinjer."
---

**Overblik:**

I min tid hos Rambøll arbejdede jeg tæt sammen med det team, der havde ansvaret for at vedligeholde en ti år gammel Python/Django-platform til risikostyring, som blev brugt på tværs af flere forretningsenheder. Med årene havde systemet opbygget en betydelig teknisk gæld med inkonsistente moduler, tæt koblet logik og arkitektoniske begrænsninger, der fulgte med frameworket og sproget. Efterhånden som der opstod nye krav på enterprise-niveau, blev det stadig tydeligere, at den gamle platform ikke længere kunne understøtte skalerbar, typesikker og vedligeholdelsesvenlig domænemodellering. Som svar godkendte ledelsen et greenfield-initiativ – internt kaldet _Data Workbench_ – der skulle bygge en moderne enterprise-platform til procesmodellering på grundlag af erfaringerne fra vedligeholdelsen af den gamle kodebase.

{{< sketch name="modernization" caption="Fra legacy til moderne arkitektur" >}}

**Udfordringer og tekniske forhindringer:**

Den centrale udfordring var at designe en platform, der kunne understøtte **brugerdefinerede datamodeller og dynamiske forretningsprocesser** – krav, som Python/Django-stakken havde haft svært ved at opfylde på grund af dynamisk typning, en fragmenteret arkitektur og manglen på robuste værktøjer til domænemodellering. Derudover krævede kompleksiteten i enterprise-arbejdsgangene typesikkerhed, konsistent modelleringssemantik og klare grænser mellem delsystemerne. At bygge et sådant system fra bunden krævede ikke kun en ny teknologistak, men også et disciplineret arkitektonisk fundament, der kunne skalere i takt med platformens udvikling. At afveje disse tekniske begrænsninger mod de uklare produktkrav i den tidlige fase gav et krævende designmiljø.

{{< sketch name="capabilities" caption="Platformens kapabiliteter" >}}

**Handling og problemløsning:**

Jeg stod i spidsen for det arkitektoniske design af platformen med afsæt i principperne i domain-driven design og implementerede kernestrukturen i C# og EF Core. Mit arbejde omfattede omfattende research i modelleringsmønstre og omsætning af disse koncepter til konkrete prototyper, der viste, hvordan brugerdefinerede datamodeller, valideringsregler og tenant-specifikke konfigurationer kunne implementeres i et stærkt typet miljø. Jeg byggede de første implementeringer af domænemodellen, entitetsarkitekturen, valideringsmotoren, EF Core-strategierne, API-designet og tidlige UI-prototyper og sikrede, at hver komponent passede ind i en sammenhængende arkitektonisk vision. Gennem hele forløbet samarbejdede jeg tæt med afdelingens tekniske leder, hvor jeg præsenterede trade-offs, tydeliggjorde begrundelserne for designbeslutningerne og hjalp med at prioritere udviklingsplanen ud fra praktisk gennemførlighed og langsigtet vedligeholdelse.

{{< sketch name="architecture" caption="Domænedrevet arkitektur" >}}

**Kompetencer og nyskabelser:**

Projektet krævede en blanding af arkitektonisk stringens og eksplorativt design. Jeg fik dyb erfaring med at anvende domain-driven design i praksis, udvikle skalerbare strategier for datamodellering og vurdere, hvordan stærkt typede frameworks kan understøtte dynamiske enterprise-arbejdsgange. Jeg skrev også arkitekturretningslinjer, der beskriver de vigtigste beslutninger, mønstre og konventioner, og var dermed med til at lægge et fundament for fremtidige bidragydere. Rollen krævede tæt samarbejde på tværs af tekniske og forretningsmæssige perspektiver, hvilket gav mig mulighed for at påvirke den overordnede strategi og samtidig bygge konkrete, fungerende prototyper, der formede projektets retning.

{{< sketch name="contributions" caption="Arkitektonisk ledelse og bidrag" >}}

**Konklusion og effekt:**

Data Workbench-initiativet lagde fundamentet for en næste generations enterprise-platform til modellering, som adresserede mangeårige begrænsninger i det gamle system og gav et skalerbart, vedligeholdelsesvenligt arkitektonisk grundlag for den videre udvikling. Mine bidrag – fra arkitektonisk research og prototyper til designledelse og samarbejde med interessenter – spillede en central rolle i at definere platformens tekniske retning. Selvom projektet stadig var i en tidlig udviklingsfase, da jeg afsluttede mit arbejde, udstak det en klar vej frem og viste, at et moderne, stærkt typet, domænedrevet alternativ til den gamle Django-løsning var levedygtigt.
