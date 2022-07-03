let contador = 0;

/*
let restar = document.getElementById("restar");
let reiniciar = document.getElementById("reiniciar");
let sumar = document.getElementById("sumar");
*/

let botones = document.querySelectorAll(".btn")
let numero = document.getElementById("contador");

botones.forEach(function (boton){
    boton.addEventListener("click",function(e){
        let lista_de_clases = e.currentTarget.classList;
        if (lista_de_clases.contains("restar")){
            contador--;
        }
        else if(lista_de_clases.contains("sumar")){
            contador++;
        }
        else if(lista_de_clases.contains("reiniciar")){
            contador=0;
        }
        if(contador>0){
            numero.style.color="green";
        }
        else if(contador<0){
            numero.style.color="red";
        }
        else if(contador==0){
            numero.style.color="black"
        }
        numero.textContent = contador;
    })
})