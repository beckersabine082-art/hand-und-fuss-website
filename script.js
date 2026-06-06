const startPopup = document.getElementById("start-popup");
const closePopup = document.getElementById("close-popup");

if (startPopup && closePopup) {
    closePopup.addEventListener("click", () => {
        startPopup.classList.add("hide");
    });

    startPopup.addEventListener("click", (event) => {
        if (event.target === startPopup) {
            startPopup.classList.add("hide");
        }
    });
}
