var saldo= document.querySelector("#saldo");
var apuesta=document.querySelector("#bet");
var numero=document.querySelector("#numero");
var resultado= document.querySelector("#resultado");
var gano= document.querySelector("#gano");
console.log(apuesta);

function lanzar(){

    apuestafinal=parseInt(apuesta.value);
    saldofinal= parseInt(saldo.value);
    numeroapostado=parseInt(numero.value);
    console.log(saldofinal);
    console.log(apuestafinal);
    if (apuesta.value==="" || apuestafinal===0){
        alert("Poné la guita");
    } else if (apuestafinal>saldofinal || saldo.value===""){
        alert("No te alcanza")
    } else if (numero.value===""){
        alert("No te olvides del numerito")

    } else {
     resultado.value= Math.floor(Math.random() * 6 + 1);
     console.log(resultado.value);
     console.log(numeroapostado);
     if(resultado.value!=numeroapostado){
        gano.value="PERDISTE";
        saldo.value=saldofinal-apuestafinal;

     } else {
        gano.value="GANASTE";
        saldo.value=saldofinal+apuestafinal;
     }


    }


    
}

function fin(){
    if (saldo.value>0){
    alert("Gracias por participar, te llevás $ " + saldo.value);
    } else {
        alert("Te vas con las manos vacías. Otra vez será");
    }
    
}