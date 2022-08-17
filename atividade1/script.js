var noturno = document.getElementsByTagName("button")[0];
var div = document.getElementsByTagName("main")[0];

//O erro era pq o JS não estava no final da página, portanto as tags ainda não haviam sido carregadas;
noturno.onclick = function click() {
    div.style.backgroundColor = "black";
}