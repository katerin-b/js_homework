"use strict";

/* 1. Напишите функцию, которая в зависимости от переданного в нее целочисленного
аргумента count, будет возвращать слово "товар" в правильной форме ("12 товаров",
но "22 товара", "1 товар", "97 товаров" и тд). */
let a = sklonenie (item)
function getItem (count) {
}

return console.log (getItem)
/* 2. Напишите функцию range, принимающую три аргумента: два обязательных: начало
и конец диапазона, третий аргумент - необязательный (если он не передан, то равен единице)
– шаг для построения массива.

Функция возвращает массив, который содержит все числа из диапазона, включая начальное
и конечное. Например, вызов функции range(1, 10, 2) должен будет вернуть
массив [1, 3, 5, 7, 9] */

function range (start, end, step = 1) {
    for (let i = start; i <= end; i++) {
        yield i;
    }
}
console.log(range())
/* 3. Написать код - ответы на следующие вопросы:
как проверить значение на определенный тип данный?
как проверить, что значение переменной было присвоено?
как проверить значение на число? */