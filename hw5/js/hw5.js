"use strict";

// Анонимные стрелочные функции

/* 1. Отсортировать массив чисел по возрастанию [3, 90, 5, -100, 50, 0, 560, 1]. Использовать метод массивов sort */

let nums = [3, 90, 5, -100, 50, 0, 560, 1];
nums.sort(function (a, b) {
    return a - b;
});
console.log(nums)

/* 3. Увеличить каждый элемент массива на 10.
Создать массив, в который войдут положительные элементы numsArr. */

let numsArr = [
    [3, 5, -1, 6, 0],
    [56, -9, 111, 6],
    [11, 86, -12],
];

// some every filter map foreach
// только foreach не создает новый массив, а меняет исходный. Если задача создать новый массив, то метод map
// Увеличить каждый элемент массива на 10
// foreach((element, index, arr)) => {})

numsArr.forEach(innerArr => innerArr.forEach( (num, ind, arr) => arr[ind] += 10 ));

// по innerArr - первая итерация перебирает первый подмассив [3, 5, -1, 6, 0] и т.д. (на 2 - [56, -9, 111, 6])
// innerArr - перебирает первый массив
// innerArr.forEach - перебирает подмассивы

// аналогично записи
/*
for (let nums of numsArr) {
    for (let i = 0; i < nums.length; i++) {
        innerArr[i] += 10;
    }
}*/
console.log(numsArr);


// Создать массив, в который войдут положительные элементы numsArr
// [[3, 5, 6], [56, 111, 6], [11, 86]]
let newArr = numsArr.map(innerArr => innerArr.filter( num => num > 0));
console.log(newArr);

// у массива вызываем метод map - он создаст внутри себя новый массив, в него будет складывать элементы
// map - всегда цикл
// map перебирает numsArr (первая итерация - перебор первого подмассива, 2 - второго, 3 - третьего)
// для каждой итерации цикла вызывается метод filter. Он создает массив и добавляет только положительные элементы
// затем map этот массив берет
// и filter - обрабатывает следующий подмассив

// аналогично записи

// map
let newAr = [];
for (let innerArr of numsArr) {
    //filter
    let newAr2 = [];
    for (let num of innerArr) {
        if (num > 0) newAr2.push(num);
    }
    newAr2.push(newAr2);
}