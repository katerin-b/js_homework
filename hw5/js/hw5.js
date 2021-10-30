"use strict";

/* 1. Отсортировать массив чисел по возрастанию [3, 90, 5, -100, 50, 0, 560, 1]. Использовать метод массивов sort */

let nums = [3, 90, 5, -100, 50, 0, 560, 1];
nums.sort(function (a, b) {
    return a - b;
});
console.log(nums)

