---
title: "Flight Assistant-app til droneflyvning"
date: 2021-01-01
draft: false
description: "Desktopapplikation til dronebaseret test af satellitantenner: konfiguration af flyveruter, behandling af RF-målinger og synkronisering af GPS-telemetri."
tags: ["Python", "Luft- og rumfart", "Droner", "RF", "GPS", "Telemetri", "Satellit"]
og_image: "/images/og.png"
locale: "da_DK"
# standardized metadata for filtering/coloring
type: "implementation"
location: "Odense, Danmark"
organization: "QuadSat"
languages: ["Python"]
frameworks: []
tools: ["GPS", "Telemetry", "RF Measurement", "Spectrum Analyzer"]
domains: ["Luft- og rumfart", "RF", "Droneoperationer"]
offer: "product-build"
problem: "Feltteknikere, der tester satellitantenner med drone, havde ikke ét samlet værktøj til at planlægge flyvninger og behandle målingerne."
analysis: "Arbejdede mellem droneforskere, RF-ingeniører og product owner for at fastlægge en arbejdsgang, mens hardwaren stadig ændrede sig."
solution: "En modulær Python-desktopapplikation, der konfigurerer flyvninger, bringer telemetri på linje med RF-data og viser antennens ydeevne på stedet."
---

**Overblik:**

Efter min kandidatuddannelse gik jeg fra deltidsudvikler til fuldtids Lead Software Engineer hos QuadSat, en lille, men højt specialiseret virksomhed, der kombinerer droneteknologi med RF-målesystemer til test af satellitantenner. Virksomheden havde på det tidspunkt kun fem medarbejdere, og jeg fik ansvaret for at designe og implementere en ny desktopapplikation – senere kaldt _Flight Assistant_ – der skulle støtte teknikerne i felten. Målet med applikationen var at give ét samlet værktøj til at konfigurere dronens flyveruter, behandle RF-måledata fra en proprietær payload og synkronisere telemetri fra både dronen og en GPS-basestation.

{{< sketch name="workflow" caption="Arbejdsgang: fra felt til analyse" >}}

**Udfordringer og tekniske forhindringer:**

En af de største udfordringer i udviklingen af Flight Assistant var, at produktet grundlæggende var i bevægelse. Fordi QuadSat var i en aktiv forsknings- og udviklingsfase, ændrede kravene sig hurtigt, efterhånden som drone- og payload-teknologien modnedes. Det betød, at softwaren ikke kunne bygges op omkring faste antagelser; arkitekturen skulle kunne optage konstante ændringer med mindst mulig forstyrrelse. Derudover byggede dataindlæsningen på manuelle filoverførsler af GPS-logs, flyvetelemetri og RF-spektrometridata – hver især produceret af forskellige instrumenter med varierende formater og pålidelighed. At håndtere disse tekniske uensartetheder og samtidig opretholde en stabil, brugervenlig desktopapplikation krævede et design med fokus på fleksibilitet, modularitet og fejltolerance.

{{< sketch name="transformation" caption="Fra udfordring til løsning" >}}

**Handling og problemløsning:**

Jeg designede og implementerede Flight Assistant fra bunden i Python og skabte et modulært framework, der kunne indlæse dronetelemetri, data fra GPS-basestationen og målefiler fra spektrumanalysatorer. Applikationen indeholdt værktøjer til at definere og uploade flyveruter ved hjælp af specialiseret payload-software, til at behandle telemetri og bringe den på linje med RF-data og til at generere visualiseringer, der blev brugt til at diagnosticere antennens ydeevne på stedet. Som den eneste softwareingeniør i begyndelsen – og senere som teamleder – byggede jeg fundamentet for kodebasen, fastlagde udviklingskonventioner og sikrede, at arkitekturen kunne udvikle sig, når behovene for funktioner ændrede sig. Det krævede, at jeg forudså fremtidige use cases, afkoblede komponenterne for at muliggøre hurtig iteration og fastholdt pålideligheden på trods af begrænsede ressourcer.

{{< sketch name="architecture" caption="Flight Assistants arkitektur" >}}

**Kompetencer og nyskabelser:**

Ud over den praktiske udvikling spillede jeg en afgørende rolle i samarbejdet. Jeg var det primære bindeled mellem droneforskerne, RF-ingeniørerne og product owner og sikrede, at softwarens roadmap blev ved med at passe til de tekniske muligheder og de forretningsmæssige prioriteter. Det betød ofte, at jeg måtte mægle mellem modstridende hensyn – for eksempel ved at afveje forskernes eksperimentelle behov mod kravene om stabile værktøjer, der kunne bruges i felten. Efterhånden som teamet voksede, var jeg mentor for studentermedhjælpere inden for udvikling og støttede medlemmer af robotteamet, der arbejdede med softwarenære opgaver, og bidrog dermed til at standardisere praksis på tværs af virksomheden. Mit arbejde styrkede både produktets tekniske fundament og den interne samarbejdsmodel mellem udvikling og forskning.

{{< sketch name="leadership" caption="Teknisk ledelse som bindeled" >}}

**Konklusion og effekt:**

Flight Assistant udviklede sig til et centralt værktøj for feltteknikerne med en integreret arbejdsgang til at konfigurere flyvninger, behandle RF-målinger og diagnosticere antennens ydeevne. Selvom nogle planlagte automatiseringer – såsom trådløs dataoverførsel – blev udskudt på grund af ressourceprioritering, leverede løsningen pålidelig, praktisk værdi inden for de driftsmæssige rammer i et forskningsmiljø i en tidlig fase. Projektet viste min evne til at designe tilpasningsdygtig software i et teknisk landskab i hurtig forandring, lede tværfagligt samarbejde og føre et produkt fra koncept til en løsning, der er klar til brug i felten, inden for et højt specialiseret domæne.
