const TextStatus=document.getElementById("lampStatus");
const LampToggle=document.getElementById("lampToggle");
const LampState=localStorage.getItem("lampState");

LampToggle.addEventListener("change",()=>{
    
    if(LampToggle.checked){
        TextStatus.textContent="ON";
        TextStatus.style.color="#238445";
    }else{
        TextStatus.textContent="OFF";
        TextStatus.style.color="#fa3636";
    }
});

if(LampState==="ON"){
    LampToggle.checked=true;
    TextStatus.textContent="ON";
}else{
    LampToggle.checked="false";
    TextStatus.textContent="OFF";
}

LampToggle.addEventListener("change",()=>{
    if(LampToggle.checked){
        TextStatus.textContent="ON";
        localStorage.setItem("LampState,ON")
    }else{
        TextStatus.textContent="OFF";
        localStorage.setItem("LampState,OFF")
    }
});
