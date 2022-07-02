const colores = [1,2,3,4,5,6,7,8,9,0,"A","B","C","D","E","F"];

const boton = document.getElementById("boton");
const color = document.getElementById("color");

boton.addEventListener("click",()=>{
    let hexColor = "#"
    for (let i=0;i<6;i++){
        hexColor += colores[GetRandomNumber()];
    }
    document.body.style.backgroundColor = hexColor;
    color.innerHTML = hexColor;
});

function GetRandomNumber(){
    return Math.floor(Math.random() * colores.length);
}