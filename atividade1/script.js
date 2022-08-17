var noturno = document.getElementsByTagName("button")[0];
var div = document.getElementsByTagName("main")[0];

//Essa função funciona em ambiente de teste mas não funciona no meu código, razão ainda desconhecida
noturno.onclick = function click() {
    div.style.backgroundColor = "blue";
}