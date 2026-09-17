const lampTextStatus = document.getElementById("lampStatus");
const lampToggle = document.getElementById("lampToggle");

// Ambil status lampu dari localStorage
const lampState = localStorage.getItem("LampState");

// Tampilkan kondisi awal
if (lampState === "ON") {

    lampToggle.checked = true;
    lampTextStatus.textContent = "ON";
    lampTextStatus.style.color = "#238445";

} else {

    lampToggle.checked = false;
    lampTextStatus.textContent = "OFF";
    lampTextStatus.style.color = "#fa3636";

}


// Ketika toggle lampu diklik
lampToggle.addEventListener("change", () => {

    if (lampToggle.checked) {

        lampTextStatus.textContent = "ON";
        lampTextStatus.style.color = "#238445";

        localStorage.setItem("LampState", "ON");

    } else {

        lampTextStatus.textContent = "OFF";
        lampTextStatus.style.color = "#fa3636";

        localStorage.setItem("LampState", "OFF");

    }

});