var noturno = document.getElementsByTagName("button")[0];

var div = document.getElementsByTagName("main")[0];
var head = document.getElementsByTagName("header")[0];
var foot = document.getElementsByTagName("footer")[0]; 

//O erro era pq o JS não estava no final da página, portanto as tags ainda não haviam sido carregadas;
noturno.onclick = function click() {
    if (div.style.backgroundColor == 'rgb(231, 231, 231)'){
        div.style.backgroundColor = '#141f27';
        div.style.color = "white";

        head.style.backgroundColor = '#141f27';
        foot.style.backgroundColor = '#141f27';

    } else {
        div.style.backgroundColor = "#e7e7e7";
        div.style.color = "blue";
        head.style.backgroundColor = '#e7e7e7';
        foot.style.backgroundColor = '#e7e7e7';
    }
}