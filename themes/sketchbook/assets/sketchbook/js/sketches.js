const mermaid = window.mermaid;
const sketchSelector = "pre.mermaid";
const themeToggleSelector = ".theme-toggle";
const darkSchemeQuery = "(prefers-color-scheme: dark)";

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

async function drawSketches(sketches) {
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

async function redrawSketches(sketches) {
    restoreSources(sketches);
    await drawSketches(sketches);
}

function redrawAfterThemeChange(sketches) {
    requestAnimationFrame(() => redrawSketches(sketches));
}

const sketches = [...document.querySelectorAll(sketchSelector)];
const themeToggle = document.querySelector(themeToggleSelector);
const darkScheme = matchMedia(darkSchemeQuery);
const handFontShorthand = `17px ${readToken("--font-hand")}`;

mermaid.initialize({ startOnLoad: false });
rememberSources(sketches);
await document.fonts.load(handFontShorthand);
await drawSketches(sketches);

themeToggle.addEventListener("click", () => redrawAfterThemeChange(sketches));
darkScheme.addEventListener("change", () => redrawAfterThemeChange(sketches));
