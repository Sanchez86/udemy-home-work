let menu =  document.querySelector('.menu'),
menuItems = document.querySelectorAll('.menu li');

//Восстановить порядок в меню
menu.insertBefore(menuItems[2], menuItems[1]); 

//добавить пятый пункт в меню
let lastLi = document.createElement("li");
lastLi.classList.add('menu-item');
lastLi.textContent='Пятый пункт';
menu.appendChild(lastLi);

//Заменить картинку заднего фона на другую из папки img
let newBackgroundImage = "url('img/apple_true.jpg')";
document.body.style.background = newBackgroundImage;


//Поменять заголовок
let newHeader = "Мы продаем только подлинную технику Apple";
let oldheader = document.getElementById("title");
oldheader.textContent = newHeader;

// Удалить рекламу со страницы
document.querySelector('.adv').remove();

//Спросить у пользователя отношение к технике apple и записать ответ в блок на странице с id "prompt"
let question = prompt('Ваше отношение к технике Apple','');
document.getElementById("prompt").textContent = question;