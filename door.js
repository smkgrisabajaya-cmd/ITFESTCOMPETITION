const btn=document.getElementById("btnDoor");
const textStatus=document.getElementById("textDanger");
let doorLocked=true;

btn.addEventListener('click',()=>{
    doorLocked=!doorLocked;
    if(doorLocked){
        textStatus.textContent="Aman";
        btn.textContent="🔓Buka Pintu";
        btn.style.color="#264d12";
        btn.style.background="#00FF00";
    }else{
        textStatus.textContent="Perhatian!";
        btn.textContent="🔒Tutup Pintu";
        btn.style.color="#ba1111"
        btn.style.background="#b57272"
    }
});
