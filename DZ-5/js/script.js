'use strict';

let bodyAll = document.getElementsByTagName('body'),
    ul = document.querySelectorAll('.menu'),
    menuItem = document.querySelectorAll('.menu-item'),
    column = document.querySelectorAll('.column'),
    title = document.getElementById('title'),    
    adv = document.getElementsByClassName('adv'),
    answer = document.getElementById('prompt'),
    li = document.createElement('li');

li.classList.add('menu-item');
li.textContent = 'Пятый пункт';
ul[0].appendChild(li);
ul[0].insertBefore(menuItem[2], menuItem[1]);

bodyAll[0].style.backgroundImage = "url(img/apple_true.jpg)";


title.textContent = 'Мы продаем только подлинную технику Apple';

// console.log(adv[0]);
column[1].removeChild(adv[0]);
// родитель column[1] - ребенок adv[0]

answer.textContent = prompt("Как Вы относитесь к технике Apple?", "");
// добавить текст прямо на сайт в блок id "prompt"
