---
title: "GitDiffGraph: Reviewing a Code Change as a Graph"
date: 2026-10-16
draft: false
description: "A Rider plugin that draws a C# change as a graph of the types it touched and their dependencies, for reviewing AI-generated code and pull requests."
tags: ["Rider Plugin", "C#", "Roslyn", "Code Review", "Git", "Product"]
og_image: "/images/og.png"
locale: "en_US"
type: "implementation"
organization: "Independent"
languages: ["C#", "Kotlin"]
frameworks: [".NET", "Roslyn"]
tools: ["JetBrains Rider", "Git", "D3"]
domains: ["Developer Tools", "Code Review", "Static Analysis"]
offer: "product-build"
problem: "AI agents and large pull requests change many types at once, and a line-by-line diff does not show how those changes relate."
analysis: "A reviewer first needs to know which types changed, in what order they build on each other and how they connect across projects."
solution: "A Rider plugin, published on JetBrains Marketplace, that draws a C# change as a graph of types and dependencies and stages from the graph."
---

## The problem

A Git diff shows a change line by line, file by file, in alphabetical order. That works for a small change. It stops
working when an AI agent rewrites twenty types in one pass, or a pull request spans several projects: the reviewer
reads the lines and still does not know how the pieces fit together, or whether the agent added something nobody
asked for.

Nobody handed me this problem. I identified it myself, as a use case with a product in it, and built the product.

## The analysis

The question behind a review is structural before it is textual:

- Which types were added, removed or modified?
- In what order do they build on each other, so the review can start at the bottom?
- Which projects and namespaces does the change span?
- What kind of coupling does each new dependency create?

None of these can be read from a list of changed lines. All of them can be read from the compiler's own model of the
code, compared before and after the change.

```mermaid
flowchart LR
    diff([Git change]) --> before[Code before]
    diff --> after[Code after]
    before --> roslyn[Roslyn analysis]
    after --> roslyn
    roslyn --> graph[Graph of changed types]
    graph --> review([Review in Rider])
```

## The solution

GitDiffGraph is a Rider plugin that sits beside the Git diff.

- **A graph of the change.** Every type the change added, removed or modified is a node; every dependency between them
  is a line. Each type sits to the right of the types it depends on.
- **Any baseline.** Uncommitted changes against the last commit, a branch against the branch it left, or any two
  commits.
- **Grouped by project and namespace**, so it is visible which parts of the solution a change spans.
- **Seven kinds of dependency**, read by Roslyn, the C# compiler: inherits, implements, holds, signature, creates,
  calls and uses. Opening a dependency shows the lines that create it.
- **Connected to the diff.** Opening a type opens Rider's diff of its files, and files or single dependencies can be
  staged from the graph.
- **Local.** The analysis runs on the developer's machine; nothing is uploaded.

## The result

The plugin is published on JetBrains Marketplace and has its own product page with documentation at
[gitdiffgraph.olaru.dk](https://gitdiffgraph.olaru.dk). I took it from the observation of the problem, through the
analysis of what a reviewer needs, to a released product: the analyser, the plugin, the product page and the licence
terms.
