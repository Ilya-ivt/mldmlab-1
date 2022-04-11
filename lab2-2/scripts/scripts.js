let errorMessage = "";
// Умножение бинарных матриц
function umnMatrix(A, B)
{
    let C = [];
    for (let i = 0; i < 4; i++) {
        C[i] = [];
    }
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 4; j++) {
            let t = 0;
            for (let k = 0; k < 4; k++) {
                t += A[j][k] * B[k][i];
            }
            C[j][i] = t % 2;
        }
    }     
    return C;
}
// Функция проверки коректности ввода
function Validate(arr) {
    errorMessage = "";
    if (arr.length != 4) {
        errorMessage = "Матрица должна содержать 4 строки!";
    }
    for(let i = 0; i < arr.length; i++) {
        if(arr[i].length != 4) {
            errorMessage = "Матрица должна содержать 4 столбца!";
        }
        for(let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] != '1' && arr[i][j] != '0') {
                errorMessage = "Введенная матрица должна состоять из 0 и 1!";
            }
        }
    }
    if (arr[0][0] == "") {
        errorMessage = "Массив не должен быть пустым!";
    }
    if (errorMessage) {
        return false;
    }else {
        return true;
    }
}

function GetData() {
    // Логические переменные для хранения информации о свойствах
    let refl = true;
    let Sym = true;
    let antSym = true;
    let tranz = true;
    let matrixArray = document.querySelector(".enter").value.split("\n");
    for (let i = 0; i < matrixArray.length; i++) {                     // Считываем двумерный массив, удаляя лишние пробелы
        matrixArray[i] = matrixArray[i].replace(/ +/g, ' ').trim();
        matrixArray[i] = matrixArray[i].split(" ");
    }
    if (Validate(matrixArray)) {
        let tempMatrix = umnMatrix(matrixArray, matrixArray);
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {

                if (i!=j) {
                    if (matrixArray[i][j] == matrixArray[j][i]) {
                        antSym = false;
                    }
                }
                if (i == j) {
                    if (matrixArray[i][j] == 0) {
                        refl = false;
                    }
                } else {
                    if (matrixArray[i][j] != matrixArray[j][i]) {
                        Sym = false;
                    }
                }
                if (matrixArray[i][j] == 0 && tempMatrix[i][j] == 1) {
                    tranz = false;
                }
            }
        }
        // Вывод данных в HTML файл
        if (refl==true) {
            document.getElementById('refl').innerHTML = "Данная матрица рефлексивна";
        } else {
            document.getElementById('refl').innerHTML = "Данная матрица не рефлексивна";
        }
        if (antSym == true) {
            document.getElementById('antSym').innerHTML = "Данная матрица кососимметрична";
        } else {
            document.getElementById('antSym').innerHTML = "Данная матрица не кососимметрична";
        }
        if (Sym == true) {
            document.getElementById('Sym').innerHTML = "Данная матрица симметрична";
        } else {
            document.getElementById('Sym').innerHTML = "Данная матрица не симметрична";
        }
        if (tranz == true) {
            document.getElementById('tranz').innerHTML = "Данная матрица транзитивна";
        } else {
            document.getElementById('tranz').innerHTML = "Данная матрица не транзитивна";
        }
        //Вывод сообщения об ошибке
    } else {
        alert(errorMessage);
    }
}
