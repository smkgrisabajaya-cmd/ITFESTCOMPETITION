const TVTextStatus = document.getElementById("TVStatus");
const TVToggle = document.getElementById("TVToggle");

const TVState = localStorage.getItem("TVState");
if (TVState === "ON") {

    TVToggle.checked = true;
    TVTextStatus.textContent = "ON";
    TVTextStatus.style.color = "#238445";

} else {

    TVToggle.checked = false;
    TVTextStatus.textContent = "OFF";
    TVTextStatus.style.color = "#fa3636";

}
TVToggle.addEventListener("change", () => {

    if (TVToggle.checked) {

        TVTextStatus.textContent = "ON";
        TVTextStatus.style.color = "#238445";

        localStorage.setItem("TVState", "ON");

    } else {

        TVTextStatus.textContent = "OFF";
        TVTextStatus.style.color = "#fa3636";
        localStorage.setItem("TVState", "OFF");

    }

});

const volValue=document.getElementById("volValue");
const volSlider=document.getElementById("volSlider");

volSlider.addEventListener("input",()=>{
    volValue.textContent=volSlider.value;
});
