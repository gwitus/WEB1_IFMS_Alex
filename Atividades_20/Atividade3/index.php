<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
    <link rel="stylesheet" href="php.css">

    <title>NineBox tratado</title>
</head>
    <body>
        <div id="escrita" name="text"></div>

        <main>
            <div class="linhaUm">
                <div id="box" name="boxUm"><i class='bx bx-sad'></i></div>
                <div id="box2" name="boxDois"><i class='bx bxs-meh-blank'></i></div>
                <div id="box3"><i class='bx bxs-smile'></i></div>
            </div>
            
            <div class="linhaDois">
                <div id="box4"><i class='bx bx-sad'></i></div>
                <div id="box5"><i class='bx bxs-meh-blank'></i></div>
                <div id="box6"><i class='bx bxs-smile'></i></div>
            </div>
            
            <div class="linhaTres">
                <div id="box7"><i class='bx bx-sad'></i></div>
                <div id="box8"><i class='bx bxs-meh-blank'></i></div>
                <div id="box9"><i class='bx bxs-smile'></i></div>
            </div>
        </main>
    </body>
</html>


<?php
    //----------------------Parte do post-------------------------\\
    //variaveis Post
    $nome = $_POST["perguntaNome"]; //Nome do funcionário
    $desempenho = $_POST["notaUm"]; //Nota de desempenho
    $potencial = $_POST["notaDois"]; //Nota de potencial    

    //Validação
    if ($desempenho == 1 && $potencial == 1){
        echo "<div style='font-size:40px; color:white'>" . "O colaborador " . $nome. ("\nÉ Insuficiente") . "</div>";
        echo "
        <script>
            var box = document.getElementById('box7').style.backgroundColor = 'blue';
        </script>
        ";
    } elseif ($desempenho == 1 && $potencial == 2){
        echo "<div style='font-size:40px; color:white'>" . "O colaborador " . $nome. ("\nÉ Questionável") . "</div>";
        echo "
        <script>
            var box = document.getElementById('box4').style.backgroundColor = 'blue';
        </script>
        ";
    }elseif ($desempenho == 1 && $potencial == 3){
        echo "<div style='font-size:40px; color:white'>" . "O colaborador " . $nome. ("\nÉ um Enigma") . "</div>";
        echo "
        <script>
            var box = document.getElementById('box').style.backgroundColor = 'blue';
        </script>
        ";
    }elseif ($desempenho == 2 && $potencial == 1){
        echo "<div style='font-size:40px; color:white'>" . "O colaborador " . $nome. ("\nÉ Eficaz") . "</div>";
        echo "
        <script>
            var box = document.getElementById('box8').style.backgroundColor = 'blue';
        </script>
        ";
    }elseif ($desempenho == 2 && $potencial == 2){
        echo "<div style='font-size:40px; color:white'>" . "O colaborador " . $nome. ("\nÉ Mantenedor") . "</div>";
        echo "
        <script>
            var box = document.getElementById('box5').style.backgroundColor = 'blue';
        </script>
        ";
    }elseif ($desempenho == 2 && $potencial == 3){
        echo "<div style='font-size:40px; color:white'>" . "O colaborador " . $nome. ("\nTem Forte Desempenho") . "</div>";
        echo "
        <script>
            var box = document.getElementById('box2').style.backgroundColor = 'blue';
        </script>
        ";
    }elseif ($desempenho == 3 && $potencial == 1){
        echo "<div style='font-size:40px; color:white'>" . "O colaborador " . $nome. ("\nÉ Comprometido") . "</div>";
        echo "
        <script>
            var box = document.getElementById('box9').style.backgroundColor = 'blue';
        </script>
        ";  
    }elseif ($desempenho == 3 && $potencial == 2){
        echo "<div style='font-size:40px; color:white'>" . "O colaborador " . $nome. ("\Tem forte Desempenho") . "</div>";
        echo "
        <script>
            var box = document.getElementById('box6').style.backgroundColor = 'blue';
        </script>
        ";  
    }elseif ($desempenho == 3 && $potencial == 3){
        echo "<div style='font-size:40px; color:white'>" . "O colaborador " . $nome. ("\Tem Alto Potencial") . "</div>";
        echo "
        <script>
            var box = document.getElementById('box3').style.backgroundColor = 'blue';
        </script>
        ";  
    } else {
        echo "<div style='font-size:40px; color:white'>" . "Erro, um ou mais campos não foram preenchidos ou foram preenchidos incorretamente" . "</div>";
    }
?>