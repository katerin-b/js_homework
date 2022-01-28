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


// если пользователь ввел задачи
if (getTaskFromLS.length>0) {
    let taskList = document.createElement("div");
      taskList.classList.add("tasks-container")
    // перебираем массив с объектами
    for (let i=0; i<getTaskFromLS.length; i++) {
        let oneTask = document.createElement("div");
        oneTask.classList.add("task-container");
        let taskName = document.createElement("h2");
        taskName.innerText = getTaskFromLS[i].title;
        let taskDescription = document.createElement("p");
        taskDescription.innerText = getTaskFromLS[i].description;
        let date = document.createElement("p");
        date.innerText = `Выполнить к: ${getTaskFromLS[i].date}`;
        oneTask.append(taskName);
        oneTask.append(taskDescription);
        oneTask.append(date);
        taskList.append(oneTask);

        oneTask.addEventListener("click", function(){
            this.classList.toggle("selected")
        })
    }
   document.body.append(taskList);
};

// если пользователь НЕ ввел задачи
if (getTaskFromLS.length===0) {
    let emptyTaskList = document.createElement("div");
    emptyTaskList.innerText = "Список задач пуст";
    document.body.append(emptyTaskList);
};


let btn_delete = document.querySelector('.delete-task-from-ls');

btn_delete.addEventListener("click", function() {
    let arr = document.querySelectorAll('.selected');
    for (let i = 0; i < arr.length; i++) {
        arr[i].remove();
    }
    let new_arr = [];
    arr = document.querySelectorAll('.task-container');
    for (let i = 0; i < arr.length; i++) {
        new_arr.push({
            title: arr[i].childNodes[0].innerText,
            description: arr[i].childNodes[1].innerText,
            date: arr[i].childNodes[2].innerText,
        });
    }
    localStorage.setItem("tasks", JSON.stringify(new_arr));
});


// полная очистка хранилища
// localStorage.clear();
