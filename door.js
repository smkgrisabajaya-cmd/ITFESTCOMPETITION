const btnDoor = document.getElementById("btnDoor");
const textDanger = document.getElementById("textDanger");
const accessText = document.getElementById("accessText");
let doorLocked = true;


btnDoor.addEventListener("click", () => {
    doorLocked = !doorLocked;
    if (doorLocked) {
        textDanger.textContent = "Aman";
         btnDoor.style.background="#adff2f";
        btnDoor.style.color="#130d0df7";
        accessText.textContent = "Tertutup";
        btnDoor.textContent = "🔓 Buka Pintu";
    } else {
        textDanger.textContent = "Perhatian!";
        accessText.textContent = "Terbuka";
        btnDoor.style.background="#d10e0ee3";
        btnDoor.style.color="#efdadaf7";
        btnDoor.textContent = "🔒 Tutup Pintu";
    }

});

