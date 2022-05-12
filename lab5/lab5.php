<!DOCTYPE html>
<head>
    <title>Лабораторная работа №5</title>
    <meta charset="UTF-8">

</head>
<body>
    <form name="form" method="POST">
        <h3>Поле для ввода</h3>
        <textarea name="mass"><?php echo @$_POST["mass"]; ?></textarea><br>
        <input type="submit" name="found" value="Найти матрицу"><br>
        <div class="example">
            <h3>Пример ввода матрицы</h3>
            <p> 0 1 1 0<br>
                0 0 0 0<br>
                0 1 0 1<br>
                0 0 1 0<br></p>
        </div>
        <?php
        if(isset($_POST["found"])) {
            $mass = explode("\n", ($_POST["mass"]));
            if (count($mass) == 1) {
                echo "Введенное выражение не является матрицой";
            } else  {
                for($i = 0; $i < count($mass); $i++) {
                    $mass[$i] = explode(" ", $mass[$i]);
                    if (count($mass) != count($mass[$i]) or count($mass[0]) != count($mass[$i])) {
                        die('Матрица введена неверно');
                    }
                }
//1 если элемент на главной диагонали, 0 для всех остальных элементов
                for ($i = 0; $i < count($mass); $i++) {
                    for ($j = 0; $j < count($mass); $j++) {
                        if($i == $j){
                            $mass[$i][$j] = 1;
                        } else {
                            if($mass[$i][$j] == 0) {
                                $mass[$i][$j] = 0;
                            } else {
                                $mass[$i][$j] = 1;
                            }
                        }
                    }
                }
//если вершина j достижима через k из i, то ставим 1
                for ($i = 0; $i < count($mass); $i++) {
                    for ($j = 0; $j < count($mass); $j++) {
                        for ($k = 0; $k < count($mass); $k++) {
                            if ($mass[$i][$j] == 0) {
                                if (($mass[$i][$k] == 1) && ($mass[$k][$j] == 1)){
                                    $mass[$i][$j] = 1;
                                } else {
                                    $mass[$i][$j] = $mass[$i][$j];
                                }
                            } else {
                                $mass[$i][$j] = $mass[$i][$j];
                            }
                        }
                    }
                }
//Записываем матрицу достижимости
                for ($i = 0; $i < count($mass); $i++) {
                    for ($j = 0; $j < count($mass); $j++) {
                        $result = $result.$mass[$i][$j]." ";
                    }
                    $result = $result."<br>";
                }
                echo "Количество вершин матрицы ", count($mass), "<br>";
                echo "Найденная матрица достижимости: ","<br>", $result;
            }
        }
        ?>
    </form>
</body>
</html>
