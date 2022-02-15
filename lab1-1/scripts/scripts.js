var arr_1, arr_2;
var error;

function countElement(arr, element) // Считает кол-во одинаковых элементов массива
{
    let count = 0;

    for (let i = 0; i < arr.length; i++)
    {
        if (arr[i] == element)
        {
            count++;
        }
    }

    return count;
}

function validate(str) // Проверяет корректность ввода
{
    let arr = false;

    if (str.length > 0)
    {
        arr = str.split(" ");

        /*
        for (let i = 0; i < arr.length; i++) // Проверка каждого символа элементов массива
        {
            if (arr[i][0] < 'a' || arr[i][0] > 'z') // Сделать проверку не только первого символа, но и всех остальных!
            {
                error = "Ошибка при вводе массива [" + str + "] в элементе " + arr[i];
                arr = false;
                break;
            }
        }
         */

        for (let i = 0; i < arr.length; i++) // Убираем повторяющиеся элементы
        {
            if (countElement(arr, arr[i]) > 1)
            {
                arr.splice(i, 1);

                i--;
            }
        }
    }
    else
    {
        error = "Массив не должен быть пустым!";
    }

    return arr;
}

// Объединение массивов

function unification(a1, a2)
{
    let result = "";

    result = a1.join(' ');

    for (let i = 0; i < a2.length; i++)
    {
        if (a1.indexOf(a2[i]) == -1)
        {
            result += ' ' + a2[i];
        }
    }

    return result;
}

// Пересечение массивов

function peresechenie(a1, a2)
{
    let result = "";

    if (a1.length > a2.length) // Если первый массив больше второго
    {
        for (let i = 0; i < a1.length; i++)
        {
            if (a1.indexOf(a2[i]) != -1)
            {
                result += a2[i] + ' ';
            }
        }
    }
    else // Если второй массив больше первого
    {
        for (let i = 0; i < a2.length; i++)
        {
            if (a1.indexOf(a2[i]) != -1)
            {
                result += a2[i] + ' ';
            }
        }
    }

    return result;
}

// B/A

function addAtoB(a1, a2)
{
    for (let i = 0; i < a2.length; i++)
    {
        for (let j = 0; j < a1.length; j++)
        {
            if (a2[i] == a1[j])
            {
                a2.splice(i , 1);
            }
        }
    }

    return a2;
}

// A/B

function addBtoA(a1, a2)
{
    for (let i = 0; i < a1.length; i++)
    {
        for (let j = 0; j < a2.length; j++)
        {
            if (a1[i] == a2[j])
            {
                a1.splice(i , 1);
            }
        }
    }

    return a1;
}

//Симметрическая разность

function diff(a1, a2)
{
    let result = "";

    for (let i = 0; i < a1.length; i++)
    {
        for (let j = 0; j < a2.length; j++)
        {
            if (a1[i] == a2[j])
            {
                a1.splice(i, 1);
                a2.splice(j, 1);

                j--;
            }
        }
    }

    result = unification(a1, a2);

    return result;
}

// Основная функция, считывает данные и вызывает второстепенные функции

function rasschet()
{
    let finalResult = "";

    var a = document.getElementById('arr1');
    var b = document.getElementById('arr2');
    // var c = document.getElementById('arr3');

    if ((arr_1 = validate(a.value)) == false)
    {
        alert(error);
    }

    if ((arr_2 = validate(b.value)) == false)
    {
        alert(error);
    }

    if (arr_1 != false && arr_2 != false)
    {
        finalResult = unification(arr_1, arr_2) + '\n'; // Результат объединения двух массивов
        document.getElementById('unification').innerText = "Результат выполнения операции объединения: \n" + finalResult;

        finalResult = peresechenie(arr_1, arr_2) + '\n'; // Результат пересечения двух массивов
        document.getElementById('peresechenie').innerText = "Результат выполнения операции пересечения: \n" + finalResult;

        finalResult = diff(arr_1, arr_2) + '\n'; // Результат симметрической разности двух массивов
        document.getElementById('diff').innerText = "Результат выполнения операции симметрической разности: \n" + finalResult;

        finalResult = addBtoA(arr_1, arr_2) + '\n'; // Результат дополнения второго массива до первого
        document.getElementById('addBtoA').innerText = "A/B: \n" + finalResult;

        finalResult = addAtoB(arr_1, arr_2) + '\n'; // Результат дополнения первого массива до второго
        document.getElementById('addAtoB').innerText = "B/A: \n" + finalResult;
    }
}