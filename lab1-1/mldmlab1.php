<!DOCTYPE html>
<html lang = "en">

<head>
    <meta charset="UTF-8">
    <title>Лабораторная работа №1</title>
    <!--<link rel="stylesheet" href="/styles/style.css"> -->
    <script type="text/javascript" src="/scripts/scripts.js"></script>
</head>
<body>
<h1>Лабораторная работа №1</h1>
<form>
    <table>
        <tr>
            <td>Первый массив:</td>
            <td> <input type="text" id="arr1" value="" size="50"></td>
        </tr>
        <tr>
            <td>Второй массив:</td>
            <td> <input type="text" id="arr2" value="" size="50"></td>
        </tr>
        <!--
        <tr>
            <td>Матрица:</td>
            <td> <textarea id="arr3" value=""></textarea></td>
        </tr>
        -->
        <tr>
            <td colspan="2"> <input type="button" value="Сделать рассчёт" onclick="rasschet();"></td>
        </tr>
    </table>
</form>
<div id="unification"></div>
<div id="peresechenie"></div>
<div id="addAtoB"></div>
<div id="addBtoA"></div>
<div id="diff"></div>
</body>
</html>