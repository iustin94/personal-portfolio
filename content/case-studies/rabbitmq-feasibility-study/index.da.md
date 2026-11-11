---
title: "Feasibility-studie af RabbitMQ"
date: 2022-01-01
draft: false
description: "Målebaseret undersøgelse af RabbitMQ til e-handelsplatforme, der håndterer Black Friday-trafikspidser hos Danmarks største onlineforhandlere."
tags: ["RabbitMQ", "E-handel", "Distribuerede systemer", "Messaging", "Skalerbarhed", "Docker"]
og_image: "/images/og.png"
locale: "da_DK"
# standardized metadata for filtering/coloring
type: "inquiry"
location: "Aarhus, Danmark"
organization: "Novicell"
languages: []
frameworks: []
tools: ["RabbitMQ", "Docker"]
domains: ["E-handel", "Skalerbarhed", "Distribuerede systemer", "Messaging"]
offer: "feasibility-study"
problem: "Ville det messaging-design, der var foreslået til Power.dk, Biltema.dk og Apoteket.dk, holde under Black Friday-trafik?"
analysis: "Belastningstest på RabbitMQ-clusters med én og flere noder, automatiseret med Docker, sammenlignede det foreslåede design med en baseline."
solution: "En flaskehals på to størrelsesordener blev fundet før implementeringen, og arkitekturteamet reviderede designet."
---

**Overblik:**

Under min praktik hos Novicell var jeg en del af A-Team, den afdeling, der har ansvaret for at vedligeholde og udvikle løsningerne til tre af Danmarks største e-handelsplatforme: **Power.dk** (en stor forhandler af forbrugerelektronik), **Biltema.dk** (en af landets største kæder inden for forbrugsvarer) og **Apoteket.dk** (en stor landsdækkende apoteksplatform). Disse systemer oplever ekstreme trafikspidser ved begivenheder som Black Friday og julehandlen. For at understøtte skalerbarhedskravene i disse miljøer med høj gennemstrømning fik jeg til opgave at gennemføre en struktureret, videnskabelig undersøgelse af, om **RabbitMQ** kunne fungere som en pålidelig kerneteknologi til beskedbehandling og belastningsfordeling. Målet var at afgøre dens arkitektoniske egnethed og sikre, at virksomhedens systemer kunne håndtere sæsonens spidsbelastninger uden forringelse af servicen.

{{< sketch name="platforms" caption="Danmarks største e-handelsplatforme" >}}

**Udfordringer og tekniske forhindringer:**

RabbitMQ's ydeevne varierer betydeligt på tværs af forskellige cluster-konfigurationer, replikeringsstrategier og mønstre for beskedbehandling. En af de centrale udfordringer var at afgøre, om det arkitekturdesign, som Novicells arkitekturteam havde foreslået, ville skalere effektivt under ekstrem belastning. Når spidsperioderne genererer hundredtusindvis af forespørgsler på få minutter, står meget på spil: Enhver flaskehals i ydeevnen kunne påvirke indkøbsoplevelsen på nogle af de største forbrugerwebsites i Danmark. At forstå, hvordan RabbitMQ opførte sig under vedvarende pres, og at identificere skjulte arkitektoniske risici var afgørende dele af undersøgelsen.

{{< sketch name="evolution" caption="Undersøgelsens udvikling" >}}

**Handling og problemløsning:**

Jeg begyndte med at etablere en baseline ved hjælp af enkle RabbitMQ-programmer, der kørte på en enkelt node. Novicell stillede flere fysiske maskiner til rådighed, så jeg kunne udvide testmiljøet til clusters med flere noder. Jeg brugte Docker — som stadig var forholdsvis nyt på det tidspunkt — til at automatisere deployments, muliggøre hurtig omkonfigurering af clusteret og sikre reproducerbare testmiljøer. Da jeg sammenlignede de enkle testopsætninger med det mere komplekse arkitekturmønster, der var foreslået til produktion, dukkede en kritisk opdagelse op: Det planlagte design **reducerede gennemstrømningen med hele to størrelsesordener**. En konfiguration, der kunne behandle millioner af beskeder, faldt til omkring **40.000** med mønsteret, trods identisk hardware og miljø. Flaskehalsen blev sporet til specifikke arkitektoniske begrænsninger, der hæmmede RabbitMQ's naturlige parallelisme og leveringseffektivitet. Jeg samlede resultaterne og præsenterede dem direkte for min leder og Novicells arkitekturchef med klare anvisninger på, hvor designet skulle justeres.

{{< sketch name="discovery" caption="Kritisk opdagelse om ydeevnen" >}}

**Kompetencer og nyskabelser:**

Ud over den interne undersøgelse fik mit arbejde en betydelig ekstern effekt. Efterhånden som jeg stødte på nuancerede konfigurationsudfordringer, dokumenterede jeg mine fund, stillede detaljerede spørgsmål og besvarede andres på StackOverflow. Flere af mine indlæg blev de højest vurderede og mest refererede RabbitMQ-indlæg på det tidspunkt, hvilket kortvarigt gjorde mig til **topbidragyder i RabbitMQ-kategorien**. Denne synlighed understregede ikke blot undersøgelsens dybde, men viste også min evne til at omsætte kompleks teknisk indsigt til klar, handlingsorienteret vejledning for det bredere udviklerfællesskab.

{{< sketch name="impact" caption="Projektets effekt" >}}

**Konklusion og effekt:**

Feasibility-studiet leverede en grundig, evidensbaseret vurdering af RabbitMQ’s muligheder og begrænsninger. Opdagelsen af en flaskehals i ydeevnen på to størrelsesordener gjorde det muligt for arkitekturteamet at justere deres design før implementeringen — og forhindrede dermed et stort skalerbarhedsproblem for nogle af Danmarks mest trafikerede detailplatforme. Projektet bekræftede RabbitMQ som en levedygtig teknologi, når den kombineres med effektive mønstre, og gav input til nye arkitekturretningslinjer for beskeddrevne løsninger hos Novicell. Det viste også min evne til at gennemføre videnskabelige undersøgelser, arbejde med distribueret infrastruktur, identificere kritiske arkitektoniske risici og formidle resultater effektivt til både organisationens ledelse og det globale udviklerfællesskab.
