const sketchSelector = "pre.mermaid";
const themeToggleSelector = ".theme-toggle";
const sketchLibraryHolderSelector = "script[data-sketch-library]";
const darkSchemeQuery = "(prefers-color-scheme: dark)";
const nearViewportMargin = "600px";

function readToken(name) {
    return getComputedStyle(document.body).getPropertyValue(name).trim();
}

function sketchPalette() {
    return {
        background: readToken("--paper-card"),
        mainBkg: readToken("--paper-card"),
        primaryColor: readToken("--paper-card"),
        primaryTextColor: readToken("--ink"),
        primaryBorderColor: readToken("--ink"),
        nodeBorder: readToken("--ink"),
        secondaryColor: readToken("--marker-solid"),
        tertiaryColor: readToken("--paper-card"),
        clusterBkg: readToken("--paper-card"),
        clusterBorder: readToken("--pencil"),
        lineColor: readToken("--pencil"),
        textColor: readToken("--ink"),
        edgeLabelBackground: readToken("--paper-card"),
        fontFamily: readToken("--font-hand"),
        fontSize: "17px"
    };
}

function rememberSources(sketches) {
    for (const sketch of sketches) {
        sketch.dataset.source = sketch.textContent;
    }
}

function restoreSources(sketches) {
    for (const sketch of sketches) {
        sketch.removeAttribute("data-processed");
        sketch.textContent = sketch.dataset.source;
    }
}

function untilAnySketchIsNear(sketches) {
    return new Promise((resolve) => {
        const observerOptions = { rootMargin: nearViewportMargin };

        const observer = new IntersectionObserver((entries) => {
            const isAnySketchNear = entries.some((entry) => entry.isIntersecting);
            if (!isAnySketchNear) {
                return;
            }
            observer.disconnect();
            resolve();
        }, observerOptions);

        for (const sketch of sketches) {
            observer.observe(sketch);
        }
    });
}

function loadSketchLibrary() {
    const libraryHolder = document.querySelector(sketchLibraryHolderSelector);
    const librarySource = libraryHolder.dataset.sketchLibrary;

    return new Promise((resolve, reject) => {
        const libraryScript = document.createElement("script");
        const loadFailure = new Error(`The sketch library could not be loaded from ${librarySource}`);
        libraryScript.src = librarySource;
        libraryScript.addEventListener("load", () => resolve(window.mermaid));
        libraryScript.addEventListener("error", () => reject(loadFailure));
        document.head.append(libraryScript);
    });
}

async function drawSketches(mermaid, sketches) {
    const themeVariables = sketchPalette();

    mermaid.initialize({
        startOnLoad: false,
        securityLevel: "strict",
        look: "handDrawn",
        handDrawnSeed: 7,
        theme: "base",
        fontFamily: themeVariables.fontFamily,
        themeVariables
    });

    await mermaid.run({ nodes: sketches });
}

async function redrawSketches(mermaid, sketches) {
    restoreSources(sketches);
    await drawSketches(mermaid, sketches);
}

function redrawAfterThemeChange(mermaid, sketches) {
    requestAnimationFrame(() => redrawSketches(mermaid, sketches));
}

const sketches = [...document.querySelectorAll(sketchSelector)];
const themeToggle = document.querySelector(themeToggleSelector);
const darkScheme = matchMedia(darkSchemeQuery);
const handFontShorthand = `17px ${readToken("--font-hand")}`;

rememberSources(sketches);
await untilAnySketchIsNear(sketches);
const mermaid = await loadSketchLibrary();
mermaid.initialize({ startOnLoad: false });
await document.fonts.load(handFontShorthand);
await drawSketches(mermaid, sketches);

themeToggle.addEventListener("click", () => redrawAfterThemeChange(mermaid, sketches));
darkScheme.addEventListener("change", () => redrawAfterThemeChange(mermaid, sketches));
