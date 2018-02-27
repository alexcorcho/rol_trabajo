function lanzar(){      
contador = 0;
document.getElementById("Btn");
contador = contador +1;
var d1 = Math.floor((Math.random() * 6 + 1 ));
var d2 = Math.floor((Math.random() * 6 + 1 ));
var d3 = Math.floor((Math.random() * 6 + 1 ));
var d4 = Math.floor((Math.random() * 6 + 1 ));
var menor = Math.min(d1,d2,d3,d4);
var total = (d1+d2+d3+d4)-menor;

document.getElementById("r1").innerHTML = d1;
document.getElementById("r2").innerHTML = d2;
document.getElementById("r3").innerHTML = d3;
document.getElementById("r4").innerHTML = d4;
document.getElementById("me").innerHTML = menor;
document.getElementById("to").innerHTML = total;


}