---
title: "SaaS-platform til finansielle arbejdsgange"
date: 2024-01-01
draft: false
description: "Finansiel SaaS-platform i enterprise-kvalitet bygget med C# og Blazor, med egen regelbaseret simuleringsmotor til små virksomheder og iværksættere."
tags: ["C#", "Blazor", ".NET", "SaaS", "Finans", "Docker", "Simulering", "EF Core"]
og_image: "/images/og.png"
locale: "da_DK"
# standardized metadata for filtering/coloring
type: "implementation"
location: "Remote / Hetzner (DE)"
organization: "Selvstændig / iværksætter"
languages: ["C#"]
frameworks: [".NET", "Blazor", "EF Core"]
tools: ["Docker", "Docker Compose"]
domains: ["SaaS", "Finans", "Simulering"]
offer: "product-build"
problem: "Små virksomheder og enkeltmandsvirksomheder manglede finansielle værktøjer i enterprise-kvalitet til en pris, de havde råd til."
analysis: "Arbejdede sammen med en revisor om at omsætte den måde, små virksomheder budgetterer, bogfører og rapporterer på, til en formel domænemodel."
solution: "En multi-tenant C#/Blazor-platform på selvhostet infrastruktur, som nu er i drift under navnet ESIO."
---

**Overblik:**

Projektet begyndte som et iværksættersamarbejde med en tidligere kollega, der som revisor arbejdede tæt sammen med små virksomheder og mikrovirksomheder. Gennem sin erfaring så han et gennemgående hul i markedet: privatpersoner, enkeltmandsvirksomheder og små virksomheder havde ikke adgang til finans- og regnskabsværktøjer af høj kvalitet, der kunne måle sig med robustheden i enterprise-software, og som samtidig lå på et prisniveau, de havde råd til. Vi satte os for at bygge en SaaS-platform, der leverede den samme – eller bedre – funktionalitet og ingeniørmæssige kvalitet, som normalt er forbeholdt store organisationer, og samtidig holdt driftsomkostningerne usædvanligt lave. Platformen blev udviklet fra ende til anden i C# og Blazor og designet til at understøtte moderne regnskabsarbejdsgange med den pålidelighed, klarhed og udvidelsesmulighed, man forventer af professionelt udviklede systemer.

{{< sketch name="market-gap" caption="Hullet i markedet" >}}

**Udfordringer og tekniske forhindringer:**

Den egentlige udfordring i projektet var ikke en enkelt teknisk forhindring, men at håndtere mange komplekse og indbyrdes afhængige hensyn på samme tid. Det omfattede at designe et vedligeholdelsesvenligt multi-tenant system, at udvikle en solid domænemodel for finansielle processer, at sikre dataintegritet på tværs af sammenkædede regnskabsenheder, at optimere omkostningerne på en selvhostet Hetzner-infrastruktur og at gennemføre trinvise migreringer gennem flere .NET-versioner – fra .NET 7 til 10. Den største vanskelighed lå i at finde den rette balance: at behandle hvert af disse områder med tilstrækkelig grundighed uden at overdesigne nogen enkelt komponent, alt imens forretningsdomænemodellen løbende blev forfinet til et stabilt, udvidbart fundament, der overholder SOLID-principperne.

{{< sketch name="challenges" caption="Tekniske udfordringer" >}}

**Handling og problemløsning:**

Over flere år designede og implementerede jeg iterativt platformens centrale domænelogik og omskrev og styrkede den flere gange, efterhånden som ny forretningsindsigt kom til. Det omfattede opbygningen af de væsentlige moduler til tenant-administration, regnskabsstrukturer, rapportering og workflowlogik. Platformen blev bygget til minimale driftsomkostninger og kører på en selvhostet VPS med Docker og Docker Compose for at sikre reproducerbarhed, kontrol over miljøet og overholdelse af GDPR. En af de mest betydningsfulde ingeniørmæssige bedrifter var udviklingen af en specialbygget **regelbaseret simuleringsmotor**. Inspireret af tidligere akademisk arbejde og med afsæt i praktiske domænebegrænsninger designede jeg en tilstandsløs, funktionel simuleringsmotor, der kan modellere finansielle scenarier ved hjælp af deklarative regler. Selvom der fandtes frameworks som SimSharp, var de alt for komplekse til det tiltænkte formål. Motoren gjorde det muligt for brugerne – og for platformen selv – at generere fremskrivninger, vurdere finansielle sammenhænge og producere konsistente simuleringsresultater på grundlag af en ren modelleringsabstraktion.

{{< sketch name="simulation" caption="Simuleringsmotor" >}}

**Kompetencer og nyskabelser:**

Projektet er et af de mest teknisk krævende og mangesidede i min karriere. Det krævede full-stack-udvikling på tværs af C#, Blazor, EF Core, containeriseret infrastruktur, GDPR-bevidst hosting og designet af en fuldt specialudviklet finansiel domænemodel. Gennem arbejdet har jeg skærpet min arkitektoniske dømmekraft, styrket min evne til at omsætte forretningsbehov til formelle domænestrukturer og udvidet min erfaring med simuleringsmodellering i virkelige anvendelser. Udviklingen af den regelbaserede motor viste desuden værdien af at anvende idéer fra forskningen i praktisk produktudvikling – og hvordan akademisk funderede koncepter kan løse reelle forretningsproblemer, når de bliver rammesat rigtigt.

{{< sketch name="architecture" caption="Platformens arkitektur" >}}

**Konklusion og effekt:**

Platformen har udviklet sig gennem alle de store faser – fra konceptuelt design over flere arkitektoniske iterationer til en stabil prototype – og er nu på vej mod et produkt, der er klar til kommercialisering. Den står som et langsigtet iværksætterprojekt, der er forankret i reelle markedsbehov og båret af principfast ingeniørarbejde. Selvom den stadig er under aktiv udvikling, viser den, hvordan kvalitet, innovation og pålidelighed på enterprise-niveau kan leveres til minimale omkostninger af et lille, men dedikeret team. Projektet bliver ved med at forme min faglige filosofi: at softwareudvikling af høj kvalitet, når den styres af solide principper og en klar hensigt, kan løfte de værktøjer, der er tilgængelige for små virksomheder og selvstændige iværksættere, på en måde, der betyder noget.

{{< sketch name="evolution" caption="Platformens udvikling" >}}
