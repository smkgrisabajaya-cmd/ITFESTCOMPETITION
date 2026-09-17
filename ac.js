const TextStatus = document.getElementById("acStatus");
const AcToggle = document.getElementById("acToggle");

// Ambil status dari localStorage
const AcState = localStorage.getItem("AcState");

// Tampilkan status awal
if (AcState === "ON") {
    AcToggle.checked = true;
    TextStatus.textContent = "ON";
    TextStatus.style.color = "#238445";
} else {
    AcToggle.checked = false;
    TextStatus.textContent = "OFF";
    TextStatus.style.color = "#fa3636";
}

AcToggle.addEventListener("change", () => {

    if (AcToggle.checked) {
        TextStatus.textContent = "ON";
        TextStatus.style.color = "#238445";

        localStorage.setItem("AcState", "ON");
    } else {
        TextStatus.textContent = "OFF";
        TextStatus.style.color = "#fa3636";

        localStorage.setItem("AcState", "OFF");
    }

});