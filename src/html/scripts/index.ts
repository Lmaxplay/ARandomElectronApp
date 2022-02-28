if (isElectron) {
    // Running on electron
    document.getElementById("titlebar").classList.add("visible");
} else {
    // Not running on electron
    document.getElementById("content").classList.add("no-titlebar");
    document.getElementById("titlebar").remove();
}

setTitle("Lmaxplay test app");

document.body.classList.add("visible");
