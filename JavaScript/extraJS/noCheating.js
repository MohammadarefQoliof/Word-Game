let navEntry = performance.getEntriesByType("navigation")[0];

if (navEntry && (navEntry.type === "reload" || navEntry.type === "back_forward")) {
    let wordFinderName = localStorage.getItem("wordFinder")
    let wordWriterName = localStorage.getItem("wordWriter")
    localStorage.removeItem(`${wordFinderName.toUpperCase()}hp`)
    localStorage.removeItem(`${wordWriterName.toUpperCase()}hp`)
    window.location.href = "../../index.html"
}