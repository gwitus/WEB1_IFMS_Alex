var noturno = document.getElementsByTagName("button")[1];

var div = document.getElementsByTagName("main")[0];
var head = document.getElementsByTagName("header")[0];
var foot = document.getElementsByTagName("footer")[0]; 

var calc = document.getElementsByTagName("button")[0];

//O erro era pq o JS não estava no final da página, portanto as tags ainda não haviam sido carregadas;

//Função para trocar de cor
noturno.onclick = function click() {
    if (div.style.backgroundColor == 'rgb(231, 231, 231)'){
        //Propriedades da main, onde fica a apresentação do resultado
        div.style.backgroundColor = '#141f27';
        div.style.color = "white";
        //Troca de cor dos outros elementos no geral
        head.style.backgroundColor = '#141f27';
        foot.style.backgroundColor = '#141f27';
        //propriedades do botão de calcular
        calc.style.backgroundColor = '#e7e7e7';
        calc.style.color = "black";

    } else {
        //propriedades da main onde está o quadro que apresentará o resultado
        div.style.backgroundColor = "#e7e7e7";
        div.style.color = "blue";
        //Troca de cor dos outros elementos no geral
        head.style.backgroundColor = '#e7e7e7';
        foot.style.backgroundColor = '#e7e7e7';
        //propriedades do botão de calcular
        calc.style.backgroundColor = '#141f27';
        calc.style.color = "white";
    }
}

//----------------------------Operações matemáticas--------------------------------//

/*
    -------------Avisar ao Alex que foi necessário colocar outro botão pra calcular, pra ficar mais fácil fds 
*/

//Pegando a ordem de chamada dos options
var soma = document.querySelector("#soma").text;
var subtracao = document.querySelector("#subtracao").text;
var divisao = document.querySelector("#dividir").text;
var produto = document.querySelector("#multiplicar").text;

//Pegando o value dos input number
var numberOne = document.querySelector("#number_one").value;
var numberTwo = document.querySelector("#number_two").value;

//Trabalhando com os elementos do main, onde vai ser apresentado os resultados
const result = document.getElementsByName("input")[2];
const calcular = document.getElementsByTagName("button")[0];

//Trabalhando com o select
var select = document.getElementById("matematica");
var value = select.options[select.selectedIndex].text;

//alert(soma);

//função pras operações funcionarem
calcular.onclick = function operar() {
    //Se o select na primeira posição do array for a option soma, então somar
    if (value == soma){
        alert("deu certo");
    } else {
        alert("Deu errado");
    }
}