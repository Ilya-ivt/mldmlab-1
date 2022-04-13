var errormessage = "";
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

//функция проверки корректности ввода
function Validate(arr) {
    let valid = true;
    if (arr.length > 0) {
        let bool = arr.split('\n');

        // проверка на валидацию

        for(let i = 0; i < bool.length; i++) {
            for(let j = 0; j < bool.length; j++) {

                if (bool[i][j] != 1 && bool[i][j] != 0) {
                    errormessage = "В матрице могут быть только 0 и 1!";
                    valid = false;
                    break;
                }
                if (bool.length != 4 || bool[i].length != 4) {
                    errormessage = "Матрица должна содержать 4 строки и 4 столбца!";
                    valid = false;
                    break;
                }
            }
        }
    } else {
        errormessage = "Поле не должно быть пустым!"
        valid = false;
    }
    return valid;
}

function GetData() {
    // Логические переменные для хранения информации о свойствах
    let matrixArray = document.getElementById('enter');
    let refl = true;
    let Sym = true;
    let antSym = true;
    let tranz = true;


    if (Validate(matrixArray.value)) {
        let map = matrixArray.value.split('\n');
        let tempMatrix = umnMatrix(map, map);
        for (let i = 0; i < 4; i++) {
            for (let j = 0; j < 4; j++) {

                if (i != j) {
                    if (map[i][j] == map[j][i]) {
                        antSym = false;
                    }
                }
                if (i == j) {
                    if (map[i][j] == 0) {
                        refl = false;
                    }
                } else {
                    if (map[i][j] != map[j][i]) {
                        Sym = false;
                    }
                }
                if (map[i][j] == 0 && tempMatrix[i][j] == 1) {
                    tranz = false;
                }
            }
        }
        // Вывод данных в HTML файл
        if (refl == true) {
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
        alert(errormessage);
    }

}
