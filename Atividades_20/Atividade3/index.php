
<?php
    //variaveis Post
    $nome = $_POST["perguntaNome"]; //Nome do funcionário
    $desempenho = $_POST["notaUm"]; //Nota de desempenho
    $potencial = $_POST["notaDois"]; //Nota de potencial    


    //Validação
    if ($desempenho == 1 && $potencial == 1){
        echo ("\n Insuficiente");
    } elseif ($desempenho == 1 && $potencial == 2){
        echo ("\n Questionável");
    }elseif ($desempenho == 1 && $potencial == 3){
        echo ("\n Enigma");
    }elseif ($desempenho == 2 && $potencial == 1){
        echo ("\n Eficaz");
    }elseif ($desempenho == 2 && $potencial == 2){
        echo ("\n Mantenedor");
    }elseif ($desempenho == 2 && $potencial == 3){
        echo ("\n Forte Desempenho");
    }elseif ($desempenho == 3 && $potencial == 1){
        echo ("\n Comprometido");
    }elseif ($desempenho == 3 && $potencial == 2){
        echo ("\n Forte Desempenho");
    }elseif ($desempenho == 3 && $potencial == 3){
        echo ("\n Alto Potencial");
    } else {
        echo "\nErro, um ou mais campos foram preenchidos de forma incorreta!";
    }

?>