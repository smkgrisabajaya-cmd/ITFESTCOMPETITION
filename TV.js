const tvTextStatus = document.getElementById("TVStatus");
const tvToggle = document.getElementById("TVToggle");

// Ambil status dari localStorage
const tvState = localStorage.getItem("tvState");

// Tampilkan status awal
if (tvState === "ON") {
    tvToggle.checked = true;
    tvTextStatus.textContent = "ON";
    tvTextStatus.style.color = "#238445";
} else {
    tvToggle.checked = false;
    tvTextStatus.textContent = "OFF";
    tvTextStatus.style.color = "#fa3636";
}

// Update saat toggle diklik
tvToggle.addEventListener("change", () => {
    if (tvToggle.checked) {
        tvTextStatus.textContent = "ON";
        tvTextStatus.style.color = "#238445";
        localStorage.setItem("tvState", "ON");
    } else {
        tvTextStatus.textContent = "OFF";
        tvTextStatus.style.color = "#fa3636";
        localStorage.setItem("tvState", "OFF");
    }
});