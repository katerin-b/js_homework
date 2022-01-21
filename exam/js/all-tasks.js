"use strict";

// получаем данные, введенные пользовавателем в хранилище

let getTaskFromLS = localStorage.getItem("tasks");
// придет тип данных - строка (JSON-строчка)
// у строки есть только методы строк
// нет методов объекта
// строку нужно преобразовать в тип данных, с которым собираемся работать. В данном случае - в объект.
// Если бы хранился массив, то в массив.

// преобразуем json строку в объект
getTaskFromLS = JSON.parse(getTaskFromLS);
// или так getTaskFromLS = JSON.parse(localStorage.getItem("tasks"));
// обращаемся к объекту json. и вызываем метод parse
// в метод parse передаем ту строчку, которую хотим прочесть

console.log(getTaskFromLS);



// ?????? let list = document.querySelector("h1");

// если пользователь ввел задачи
if (getTaskFromLS.length>0) {
    let taskList = document.createElement("div");
    // перебираем массив с объектами
    for (let i=0; i<getTaskFromLS.length; i++) {
        let outputList = document.createElement("div");
        let taskName = document.createElement("h2");
        taskName.innerText = getTaskFromLS[i].title;
        let taskDescription = document.createElement("p");
        taskDescription.innerText = getTaskFromLS[i].description;
        let date = document.createElement("p");
        date.innerText = `Выполнить к: ${getTaskFromLS[i].date}`;
    }
};

// если пользователь НЕ ввел задачи
if (getTaskFromLS.length===0) {
    let emptyTaskList = document.createElement("div");
    emptyTaskList.innerText = "Список задач пуст";
};




//создаем пустой массив для удаленных задач
let deleteTaskFromLS = [];


// полная очистка хранилища
// localStorage.clear();
