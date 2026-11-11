---
title: "GitDiffGraph: review af en kodeændring som en graf"
date: 2026-10-16
draft: false
description: "Et Rider-plugin, der tegner en C#-ændring som en graf over de berørte typer og deres afhængigheder, til review af AI-genereret kode og pull requests."
tags: ["Rider-plugin", "C#", "Roslyn", "Code review", "Git", "Produkt"]
og_image: "/images/og.png"
locale: "da_DK"
type: "implementation"
organization: "Selvstændig"
languages: ["C#", "Kotlin"]
frameworks: [".NET", "Roslyn"]
tools: ["JetBrains Rider", "Git", "D3"]
domains: ["Udviklerværktøjer", "Code review", "Statisk analyse"]
offer: "product-build"
problem: "AI-agenter og store pull requests ændrer mange typer på én gang, og et diff linje for linje viser ikke, hvordan ændringerne hænger sammen."
analysis: "En reviewer har først brug for at vide, hvilke typer der er ændret, i hvilken rækkefølge de bygger på hinanden, og hvordan de hænger sammen på tværs af projekter."
solution: "Et Rider-plugin, udgivet på JetBrains Marketplace, der tegner en C#-ændring som en graf over typer og afhængigheder og kan stage direkte fra grafen."
---

## Problemet

Et Git-diff viser en ændring linje for linje, fil for fil, i alfabetisk rækkefølge. Det fungerer for en lille ændring.
Det holder op med at fungere, når en AI-agent omskriver tyve typer i én omgang, eller når et pull request spænder over
flere projekter: revieweren læser linjerne og ved stadig ikke, hvordan delene passer sammen, eller om agenten har
tilføjet noget, ingen har bedt om.

Ingen gav mig dette problem. Jeg identificerede det selv, som en use case med et produkt i sig, og byggede produktet.

## Analysen

Spørgsmålet bag et review er strukturelt, før det er tekstuelt:

- Hvilke typer er tilføjet, fjernet eller ændret?
- I hvilken rækkefølge bygger de på hinanden, så reviewet kan begynde fra bunden?
- Hvilke projekter og namespaces spænder ændringen over?
- Hvilken slags kobling skaber hver ny afhængighed?

Ingen af delene kan læses ud af en liste over ændrede linjer. Det hele kan læses ud af compilerens egen model af
koden, sammenlignet før og efter ændringen.

```mermaid
flowchart LR
    diff([Git change]) --> before[Code before]
    diff --> after[Code after]
    before --> roslyn[Roslyn analysis]
    after --> roslyn
    roslyn --> graph[Graph of changed types]
    graph --> review([Review in Rider])
```

## Løsningen

GitDiffGraph er et Rider-plugin, der ligger ved siden af Git-diffet.

- **En graf over ændringen.** Hver type, som ændringen har tilføjet, fjernet eller ændret, er en knude; hver afhængighed
  mellem dem er en linje. Hver type står til højre for de typer, den afhænger af.
- **Et hvilket som helst sammenligningsgrundlag.** Ikke-committede ændringer mod det seneste commit, en branch mod den
  branch, den udgik fra, eller to vilkårlige commits.
- **Grupperet efter projekt og namespace**, så det er synligt, hvilke dele af solutionen en ændring spænder over.
- **Syv slags afhængigheder**, aflæst af Roslyn, C#-compileren: arver, implementerer, holder, signatur, opretter,
  kalder og bruger. Når man åbner en afhængighed, vises de linjer, der skaber den.
- **Forbundet med diffet.** Når man åbner en type, åbnes Riders diff af dens filer, og filer eller enkelte afhængigheder
  kan stages fra grafen.
- **Lokalt.** Analysen kører på udviklerens egen maskine; intet bliver uploadet.

## Resultatet

Pluginet er udgivet på JetBrains Marketplace og har sin egen produktside med dokumentation på
[gitdiffgraph.olaru.dk](https://gitdiffgraph.olaru.dk). Jeg har ført det fra observationen af problemet, gennem
analysen af, hvad en reviewer har brug for, til et udgivet produkt: analysatoren, pluginet, produktsiden og
licensvilkårene.
