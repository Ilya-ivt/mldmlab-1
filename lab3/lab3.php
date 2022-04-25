<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Лабораторная работа №3</title>
</head>
<body >
        <form action="" method="post">
            <p style="font-size: 18px;">Первое множество: <input type="text" name="mnoj1" value="<?php
                if (isset($_POST['mnoj1'])) {
                    echo $_POST['mnoj1'];
                }?>">
                <br>Второе множество: <input type="text" name="mnoj2" value="<?php
                if (isset($_POST['mnoj2'])) {
                    echo $_POST['mnoj2'];
                }?>">
                <br>Отношение: <input type="text" name="otnosh" value="<?php
                if (isset($_POST['otnosh'])) {
                    echo $_POST['otnosh'];
                }?>">
                <br><input type="submit" name="sub" value="Проверить"><br>
        </form>
        <?php
        //Cоздаем массивы и получаем данные из input'ов
        ini_set('display_errors', 'Off');
        if (isset($_POST['sub'])) {
            $indikator = 0;
            $error1 = 0;
            $error2 = 0;
            //разбиваем  данные на массивы по разделителю в виде запятой
            $otnosh = explode(',', $_POST['otnosh']);
            $mnoj1 = explode(',', $_POST['mnoj1']);
            $mnoj2 = explode(',', $_POST['mnoj2']);
            $dlinaotn = count($otnosh);
            $dlina1 = count($mnoj1);
            $dlina2 = count($mnoj2);
            //проверяем элементы первого множества на повтор с помощью двойного цикла.
            for($i = 0; $i<$dlina1; $i++){
                for($j = 0; $j<$dlina1; $j++){
                    if($i != $j){
                        if($mnoj1[$i] == $mnoj1[$j]){
                            echo 'вы ввели несколько одинаковых элементов в первом множестве';
                            echo "<br>";
                            $error1 = 1;
                            break;
                        }
                    }
                }
                if($error1 == 1){
                    break;
                }
            }
            //проверяем элементы второго множества на повтор.
            for($i = 0; $i<$dlina2; $i++){
                for($j = 0; $j<$dlina2; $j++){
                    if($i != $j){
                        if($mnoj2[$i] == $mnoj2[$j]){
                            echo 'вы ввели несколько одинаковых элементов во втором множестве';
                            echo "<br>";
                            $error2 = 1;
                            break;
                        }
                    }
                }
                if($error2 == 1){
                    break;
                }
            }
            /*
            Смотрим сколько элементов из первого множества присутствует в отношении и записываем в переменную $match.
            */
            $error4 = 0;
            $match = 0;
            for($i = 0; $i<$dlinaotn; $i++){
                if($error4 == 0){
                    if($i % 2 == 0){
                        for($j = 0; $j<$dlina1; $j++){
                            if($otnosh[$i]==$mnoj1[$j]){
                                $match = $match + 1;
                            }
                        }
                    }
                }
            }
            //Если какого то элемента не хватает, выводим сообщение об этом.
            if($match < $dlina1){
                $error4 = 1;
                echo 'Отношение не является функцией.';
                echo "<br>";
            }
            //Пробегаемся по отношению, и если встречаем несколько раз элемент первого множества, соответствующий разным элементам второго множества, узнаем что отношение не является функцией.
            $error3 = 0;
            for($i = 0; $i<$dlinaotn; $i++){
                if($error3 == 0){
                    for($j = 0; $j<$dlinaotn; $j++){
                        if($error3 == 0){
                            if($i != $j){
                                if($i % 2 == 0){
                                    if($otnosh[$i] == $otnosh[$j]){
                                        if($otnosh[$i + 1] != $otnosh[$j + 1]){
                                           // echo $otnosh[$i];
                                            echo 'Отношение не является функцией.';
                                            echo "<br>";
                                            $error3 = 1;
                                            break;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            //Если все предыдущие условия прошли без ошибок, то отношение является функцией.
            if($error1 == 0){
                if($error2 == 0){
                    if($error3 == 0){
                        if($error4 == 0){
                            echo 'Отношение является функцией';
                        }
                    }
                }
            }
        }
        ?>
<div class="primer">
    <p><h3>Пример ввода:</h3></p>
    <p>
        Первое множество: a,b,c <br>
        Второе множество: 1,2,3 <br>
        Отношение: a,1,b,2,c,3

    </p>
</div>
</body>
</html>
