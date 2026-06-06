const startBanner = document.getElementById("start-banner");

if (startBanner) {

    startBanner.addEventListener("click", () => {
        startBanner.classList.add("hide");
    });

    document.addEventListener("click", (event) => {
        if (!startBanner.contains(event.target)) {
            startBanner.classList.add("hide");
        }
    });

    window.addEventListener("scroll", () => {
        startBanner.classList.add("hide");
    }, { once: true });

}
