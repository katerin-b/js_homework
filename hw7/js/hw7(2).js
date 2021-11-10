"use strict";

/* 2. Написать функцию, которая принимает на вход объект obj (например, goods),
название (title) и количество (countToCart). Если значение title не строка,
obj не объект, а count не число, функция прерывает свою работу и возвращает false.
Функция должна найти товар с указанным названием (title): если количество позволяет,
то уменьшить значение свойства count в переданном объекте на countToCart вернуть true,
если не позволяет, то вывести информацию об этом в консоль и вернуть false. */

let goods = {
    piano: {
        title: "Пианино",
        price: 3000,
        count: 25
    },
    guitar: {
        title: "Гитара",
        price: 1200,
        count: 40
    },
    drum: {
        title: "Барабаны",
        price: 2700,
        count: 12
    },
    flute: {
        title: "Флейта",
        price: 900,
        count: 50 },
    harp: {
        title: "Арфа",
        price: 3400,
        count: 5
    }
};

function getGoods(goods, title, countToCart) {
    if ((goods === null) || (typeof goods !== 'object') || (typeof title !== 'string') || (typeof countToCart !== 'number')) {
        return false;
    }

    for (let good in goods) {
        if ((goods[good].title == title) && (goods[good].count >= countToCart)) {
            goods[good].count -= countToCart;
            return true;
        }
    }

    console.log('Not enough goods in stock');
    return false;
}