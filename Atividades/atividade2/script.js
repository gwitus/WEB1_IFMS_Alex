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

//Trabalhando com o select
var select = document.getElementById("matematica");
var value = select.options[select.selectedIndex].text;

//Pegando a ordem de chamada dos options
var soma = document.querySelector("#soma").text;
var subtracao = document.querySelector("#subtracao").text;
var divisao = document.querySelector("#dividir").text;
var produto = document.querySelector("#multiplicar").text;

//Pegando o value dos input number
var numberOne = document.querySelector("#number_one");
var numberTwo = document.querySelector("#number_two");

//Trabalhando com os elementos do main, onde vai ser apresentado os resultados
const result = document.getElementsByName("input")[2];
const calcular = document.getElementsByTagName("button")[0];

//função pras operações funcionarem
calcular.onclick = function operar() {
//-----------------------------------Foi necessário resetar a var value em todo clique, se não o js salvava uma operação selected especifica e não permitia a realização das operações---------//
    var value = 0;
    var value = select.options[select.selectedIndex].text;

    if (value == soma){
        somar();
    } else if(value === subtracao) {
        
        subtrair();
    } else if (value === divisao){  
        dividir();
    } else if (value === produto) {
         multiplicar();
    } else {
        alert("Nenhuma operação selecionada");
    }
}
//---------------------------------Funções com as operações--------------------------------------//
//-----------Aqui eu fiquei cerca de uma hora, memorizar bem o problema da concatenação----------//
function somar() {
    var somar = (Number(numberOne.value)) + (Number(numberTwo.value));
    document.getElementById("text").value = somar;
}

function subtrair() {
    var subtrair = (Number(numberOne.value)) - (Number(numberTwo.value));
    document.getElementById("text").value = subtrair;
}
//funcionando   
function dividir() {
    var dividir = (Number(numberOne.value)) / (Number(numberTwo.value));
    document.getElementById("text").value = dividir;
}
//funcionando
function multiplicar() {
    var multiplicar = (Number(numberOne.value)) * (Number(numberTwo.value));
    document.getElementById("text").value = multiplicar;
}

//-----------------------------------Aumentar e diminuir fonte-------------------------------------//
var aumento = document.getElementsByTagName("button")[2];
//Por falta de conhecimento em Jquery, mudei a classe div pra tag article, pois uma classe não tem o atributo style se não for por jquery

var coringa = 21;

aumento.onclick = function aumentarFont() {
    var font = document.getElementsByTagName("input")[2];
    //Função concatenando pra fazer crescer sem precisar de laço
    font.style.fontSize = coringa + 'px'; 
    coringa++;
}

//Função diminuir fonte
var diminuto = document.getElementsByTagName("button")[3];

diminuto.onclick = function diminuirFont() {
    var font = document.getElementsByTagName("input")[2];
    font.style.fontSize = coringa + 'px'; 
    coringa--;
}