"use strict";

/* 1. Создать функцию, которая принимает на вход число от 1(понедельник) до 7(воскресенье),
а возвращает день недели на русском языке*/
    let day = prompt('Введите число от 1 до 7');
    switch (day) {
        case "1":
            console.log("понедельник");
            break;
        case "2":
            console.log("вторник");
            break;
        case "3":
            console.log("среда");
            break;
        case "4":
            console.log("четверг");
            break;
        case "5":
            console.log("пятница");
            break;
        case "6":
            console.log("суббота");
            break;
        case "7":
            console.log("воскресенье");
            break;
        default:
            alert('Вы ввели неверное число');
            console.log('Вы ввели неверное число');
}


/* 5. Создать массив из пересечений использовать методы filter + includes
let first = ["Апрель", "Июль", "Октябрь", "Май"],
second = ["Май", "Январь", "Декабрь", "Октябрь"];
в итоге должен быть создан массив: ["Октябрь", "Май"]*/

let firstArr = ["Апрель", "Июль", "Октябрь", "Май"],
    secondArr = ["Май", "Январь", "Декабрь", "Октябрь"];
let filteredArr = firstArr.filter(value => secondArr.includes(value));
console.log(filteredArr)

/* 6. Проверить, есть ли в массиве temps температура больше 500,
вывести информацию об этом в консоль. Использовать метод из файла functions3.js*/

let temps = [
    [344, 241, 521, 344, 121],
    [111, 313, 351, 314],
    [134, 111, 452],
];
let newTemps = temps.join().split(',');
console.log(newTemps);
if (newTemps.some(newTemp => newTemp > 500)) {
    console.log("Есть температура больше 500");
}



