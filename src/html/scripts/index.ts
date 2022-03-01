if (isElectron) {
    // Running on electron
    titlebar.classList.add("visible");
} else {
    // Not running on electron
    content.classList.add("no-titlebar");
    titlebar.remove();
}

setTitle("Lmaxplay test app");
setIcon("images/Lmaxplayface.png");

document.body.classList.add("visible");

showMenubar();