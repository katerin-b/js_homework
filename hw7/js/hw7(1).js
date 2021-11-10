"use strict";

/* 1. Написать функцию, которая принимает на вход объект obj (например, goods), число from и число to.
Если значение from и to не числа, а obj не объект, функция прерывает свою работу и возвращает false.
Если данные валидны, функция формирует и возвращает новый ОБЪЕКТ с объектами, значения свойств price
которых лежат в диапазоне от значения from до значения to, не включая to.*/

let goods = {};

function findGoods(goods, from, to) {
    if ((goods === null) || (typeof goods !== 'object') || (typeof from !== 'number') || (typeof to !== 'number')) {
        return false;
    }
    let subGoods = {};
    for (let good in goods) {
        if ((goods[good].price >= from) && (goods[good].price < to)) {
            subGoods[good] = goods[good];
        }
    }
    return subGoods;
}





