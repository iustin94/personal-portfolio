---
title: "MasSpec-pipeline til dataanalyse"
date: 2020-05-01
draft: false
description: "Reproducerbar Jupyter-baseret Python-pipeline til proteomikanalyse med massespektrometri, med PTM-understøttelse og videnskabelige open source-workflows."
tags: ["Python", "Jupyter", "Bioinformatik", "Proteomik", "Massespektrometri", "Reproducerbar forskning"]
og_image: "/images/og.png"
locale: "da_DK"
# standardized metadata for filtering/coloring
type: "inquiry"
location: "Odense, Danmark"
organization: "Syddansk Universitet (SDU)"
languages: ["Python"]
frameworks: ["Jupyter"]
tools: ["Scientific Python Stack", "Mass Spectrometry"]
domains: ["Bioinformatik", "Proteomik", "Reproducerbar forskning"]
offer: "feasibility-study"
problem: "Artikler inden for proteomik præsenterer ofte konklusioner uden en måde at genkøre den analyse, der ligger bag dem."
analysis: "Vurderede, om open source-værktøjer kan bære et komplet, gentageligt workflow for massespektrometri, inklusive posttranslationelle modifikationer."
solution: "En Jupyter-baseret Python-pipeline, der kører analysen fra ende til anden, og et white paper om tilgangen."
---

**Overblik:**

Under min kandidatuddannelse gennemførte jeg et selvstændigt forskningsprojekt med fokus på en af de grundlæggende udfordringer i moderne beregningsbiologi: at muliggøre reproducerbare og gennemsigtige workflows til dataanalyse. Inden for områder som massespektrometribaseret proteomik præsenterer forskningsartikler ofte konklusioner uden at tilbyde en praktisk måde at reproducere den beregningsmæssige pipeline, der frembragte resultaterne. Det skaber en barriere for validering, fagfællebedømmelse og videnskabeligt fremskridt. Mit projekt undersøgte, hvordan open source-teknologier kan lukke dette hul, ved at implementere en genanvendelig, reproducerbar pipeline til dataanalyse, designet specifikt til proteomikdata og med vægt på massespektrometridatasæt.

{{< sketch name="pipeline" caption="Overblik over proteomik-pipelinen" >}}

**Udfordringer og tekniske forhindringer:**

Pipelines til proteomik er notorisk komplekse på grund af massespektrometridataenes størrelse, heterogenitet og krav til efterbehandling. En central udfordring var at udvide pipelinen til at understøtte analyse af **posttranslationelle modifikationer (PTM)** — en afgørende, men indviklet del af fortolkningen af proteomikdata. Derudover gav reproducerbarheden i sig selv tekniske forhindringer: At sikre, at analyserne kunne køres ensartet på tværs af forskellige maskiner og miljøer, krævede omhyggelig håndtering af afhængigheder, beregningstrin og datastrukturer. Dokumentation var en anden væsentlig faktor, da et af målene var at gøre workflowet anvendeligt ikke kun for erfarne beregningsforskere, men også for forskere med begrænset programmeringsbaggrund.

{{< sketch name="problem" caption="Reproducerbarhedsproblemet" >}}

**Handling og problemløsning:**

For at imødekomme disse behov implementerede jeg en udvidelig, Jupyter-baseret Python-pipeline, der kan udføre statistisk analyse af proteomikdatasæt, herunder massespektrometrifiler og PTM-specifikke formater. Jeg integrerede almindeligt anvendte videnskabelige biblioteker, strukturerede analysetrinene, så de blev klare og konsistente, og sikrede, at hele workflowet — fra forbehandling til statistisk output — kunne køres fra ende til anden i ethvert kompatibelt miljø med minimal konfiguration. En stor del af projektet bestod i at udvide pipelinens funktionalitet med PTM-analyse, hvilket udvidede workflowets analytiske rækkevidde og gav forskere et mere nuanceret billede af modifikationer på proteinniveau.

{{< sketch name="ptm" caption="Udvidelse med PTM-analyse" >}}

**Kompetencer og nyskabelser:**

Projektet byggede bro mellem min baggrund i softwareudvikling og min uddannelse i bioinformatik og krævede en særlig kombination af kompetencer: design af datapipelines, principper for reproducerbar forskning, videnskabelig programmering og teknisk formidling. Ud over selve softwaren skrev jeg mit kandidatspeciale som et white paper, der undersøgte de bredere konsekvenser af open source- og open data-tilgange i videnskabelig forskning med proteomik som repræsentativ case. Specialet beskrev fordelene og udfordringerne ved åbne, reproducerbare workflows, fremhævede flaskehalsene i det nuværende forskningsøkosystem og pegede på massespektrometri som et ideelt domæne til at demonstrere værdien af gennemsigtige beregningspipelines.

{{< sketch name="skills" caption="Kompetencer og bidrag" >}}

**Konklusion og effekt:**

Den færdige pipeline omfattede PTM-analyse og gav en klar, reproducerbar ramme for behandling af proteomikdatasæt. Mit skriftlige speciale fik meget positiv feedback fra både min interne akademiske vejleder og en ekstern bioinformatiker fra industrien, som værdsatte evalueringens klarhed og betydningen af at fremme åbne, reproducerbare videnskabelige workflows. Projektet understregede behovet for bedre beregningsmæssig gennemsigtighed i life science-forskningen og viste min evne til selvstændigt at designe analytiske pipelines, evaluere videnskabelige værktøjer og formidle resultater på en struktureret og virkningsfuld måde.

{{< sketch name="contributions" caption="Projektets bidrag" >}}
