let tura=0
let yazi=0

let para=document.getElementById("para")
let döndür=document.getElementById("flip-button")
let reset=document.getElementById("reset-button")
function disableButton() {
    döndür.disabled = true;
    setTimeout(() => {
        döndür.disabled = false;
    }, 3000);
}
function veriler(){
    document.getElementById("turaSonuc").textContent=`Tura:${tura}`;
    document.getElementById("yaziSonuc").textContent=`Yazi:${yazi}`;
}



döndür.addEventListener("click", () => {
    // rastgele 0 ile 1 arasında sayı seçmek için random kullan
    let i = Math.floor(Math.random() * 2);
    para.style.animation="none"
    if (i) {
        setTimeout(() => {
            para.style.animation = "spin-tura 3s forwards";
        }, 100);
        tura++;
       
    } else {
        setTimeout(() => {
            para.style.animation = "spin-yazi 3s forwards";
        }, 100);
        yazi++;
       
    }
    setTimeout(veriler,3000);
    disableButton();
   
});


reset.addEventListener('click', () => {
    para.style.animation = "none";
    tura = 0;
    yazi = 0;
    veriler();
   
});  


