'use strict';

let ul = document.querySelectorAll('.menu'),
    menuItem = document.querySelectorAll('.menu-item'),
    li = document.createElement('li');

li.classList.add('menu-item');
li.textContent = 'Пятый пункт';

ul[0].appendChild(li);
ul[0].insertBefore(menuItem[2], menuItem[1]);
// console.log(ul[0]);       

