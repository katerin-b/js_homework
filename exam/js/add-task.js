"use strict";

function main () {

    const addTaskForm = document.forms['task']; // объект формы
    let title = addTaskForm.elements['title']; // из формы
    let description = addTaskForm.elements['description']; // из формы
    let date = addTaskForm.elements['date']; // из формы
    let submit = addTaskForm.elements['submit']; // из формы
    let formSuccess = document.getElementById('formMessageSuccess'); // поле сообщения об успехе

// блокируем возможность отправки нетронутой формы
    title.error = 1;
    date.error = 1;

// убираем сообщение об успешной отправке при добавлении новой задачи
    function clearFormSuccess() {
        formSuccess.innerHTML = '';
    }

// убираем сообщение об ошибке заполнения поля
    function clearError(elem) {
        elem.nextElementSibling.innerText = ''; // если не хотим выводить 'Поле заполнено верно'
    }

// устанавливаем ошибку заполнения поля
    function setError(elem, key){
        elem.error = 1;
        let messages = {
            valueMissing: 'Поле должно быть заполнено',
            tooShort:'Минмиальное количество символов ${elem.minLength}',
            tooLong: 'Максимальное количество символов ${elem.maxLength}',
            wrongDate: 'Дата не должна быть в прошлом'
        };
        elem.nextElementSibling.innerText = messages[key];
    }

// сохраняем задачу в хранилище
    function saveTaskToLS() {
        let tasks = [];
        if (localStorage.getItem('tasks') != null) { // проверяем, есть ли там уже задачи
            tasks = JSON.parse(localStorage.getItem('tasks')); // парсим текущую запись из хранилища
        }
        tasks.push({'title': title.value, 'description': description.value, 'date': date.value}); // добавляем к списку задач текущую
        localStorage.setItem('tasks', JSON.stringify(tasks)); // сохраняем обновленный список задач в хранилище
        console.log('Текущая запись в хранилище:');
        console.log(JSON.parse(localStorage.getItem('tasks'))); // выводим для проверки текущее содержимое хранилища в консоль
        formSuccess.innerHTML = 'Задача была успешно добавлена'; // размещаем сообщение об успешном добавлении задачи
    }

// обрабатываем фокус на названии задачи
    title.addEventListener('focusin', function () {
        clearFormSuccess();
        clearError(this);
    });
// обрабатываем изменение адреса
    title.addEventListener('change', function () {
        if (title.value.length === 0) {
            setError(this, 'valueMissing');
        }
        else if (title.value.length < this.minLength) {
            setError(this, 'tooShort');
        }
        else if (title.value.length > this.maxLength) {
            setError(this, 'tooLong');
        }
        else {
            this.error = 0;
        }
    });

// обрабатываем фокус на дате
    date.addEventListener('focusin', function () {
        clearFormSuccess();
        clearError(this);
    });
// обрабатываем изменение даты
    date.addEventListener('change', function () {
        let dateEntered = new Date(date.value); // создаем объект даты из данных формы
        let dateNow = new Date(); // создаем объект текущей даты
        let time_gap = dateEntered.getTime() - dateNow.getTime(); // приводим объекты к миллисекундам и вычисляем разность
        if (time_gap <= 0) { // если дата в прошлом, выдаем ошибку
            setError(this, 'wrongDate');
        }
        else {
            this.error = 0;
        }
    });

// обрабатываем нажатие на кнопку отправки
    submit.addEventListener('click', function () {
        if ((date.error === 0) && (title.error === 0)) { // если нет ошибок, сохраняем задачу в хранилище
            saveTaskToLS();
        }
    });

}

// запускаем весь процесс после того, как вся страница была загружена
document.addEventListener('DOMContentLoaded', main, false);
