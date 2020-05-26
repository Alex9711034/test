'use strict';

// Одинарные и двойные кавычки работают, по сути, одинаково, 
// а если использовать обратные кавычки, то в такую строку мы 
// сможем вставлять произвольные выражения, обернув их в ${…}:

// function sum(a, b) {
//   return a + b;
// }

// console.log(`1 + 2 = ${sum(1, 2)}.`); // 1 + 2 = 3.

/*
var leftBorderWidht = 1;
let second = 2;
const pi = 3.14;

var number = 5; // Number
var string = 'Hello'; // String
var sym = Symbol(); // Symbol
var boolean = true; // true
var type5 = null;  // ссылка на не существующую вещь
var type6; // undefined // объект уже существует, но значение не имеет
var obj = {};



console.log(4/0);
console.log(4*'stringg');
console.log(type6);

let persone = {
    name: "John",
    age: 25,
    isMarried: false
};

console.log(persone.name);
console.log(persone.isMarried);

let arr = ['plum.jpg','gfd.jpg','apple.jpg'];

console.log(arr[0]);
*/
/*
// -to String 
console.log(typeof(String(4))); //(1) String() превращает в строку
console.log(typeof(5 + 'ww'));  //(2) конактенация + превращает в строку
console.log('str' + true); // true превращается с строку

// -to Number
console.log(typeof(Number('5'))); //(1) Number() превращает в число
console.log(5 + +'5');        //(2) + превращ. число
console.log(parseInt('15px')); //(3) отделит только цисло
*/
// 0, '', null, undefined, NaN, false == false

// let switcher = null;
// if (switcher) console.log('working..'); 
// switcher = 1;
// if (switcher) console.log('working..');

// let ans = prompt("число", "");
// console.log(parseInt(ans));

// let inrc = 10,
//     decr = 10;

// console.log(inrc++);
// console.log(decr--);
// console.log(inrc);
// console.log(decr);

// console.log(2 + '2');
// console.log(2 + +'2');

// let isChecken = false,
//     isClose = false;

// console.log(isChecken || !!isClose); // ! инвертирует ложь в правду
//                                      // !! обратная инверсия в ложь

// условия

// if (true) {
//     console.log("Верно");
// } else {
//     console.log("Неверно");
// }

// (true === true) ? console.log('t') : console.log('f');   

// let num = 50;
// switch(num) {
//     case num < 50:
//         console.log("маловато");
//         break;
//     case num > 100:
//         console.log("многовато");
//         break;
//     case num > 80:
//         console.log("все еще многовато");
//         break;
//     case 50:       // без проверки ==
//         console.log("верно");
//         break;
//     default:
//         console.log("что-то пошло не так");
//         break;
// }

//  let num = 50;
// while (num > 55) {
//     console.log(num);
//     ++num;    
// }

// do {
//     console.log(num);
//     ++num;
// } while (num > 55);

// let num = 50;
// for (let i = num; i < 55; i++) {
//     if (i == 53) {
//         continue;   // идет одно прерывание итерац. цикла
//     } else if (i == 54) {
//         break;
//     }
//     console.log(i);
// }

// let x = 5; 
// console.log( ++x ); // будет 5

// console.log([ ] + false - null + true);
// // [] это 0 при выражении + fasle = false
// // null + true = 1
// // false - 1  = NaN

// console.log(true + false + null + true + +[] + +true); 
// // до [] происх. преобраз.е далее, конакт.я с true или 
// // если +true конакт.я с цифровым знач.м 1 =  21
// +[] === 0

// console.log([] + false);

// let y = 1;
// let x = y = 2; 
// console.log(x);

// console.log(([] + 1) === "1"); // true
// без преобразования [] унарным + значение оказывается строкой

// console.log( "1"[0] );
// 1 = отобр. 1 в строков. знач., [0] - объявл. аноним. 
// массива с 0 индексом и знач. 0 на которое ничто не указ.
// без объявления

// console.log(2 && 1 && null && 0 && undefined);
// let a = 1,
//     b = 2;
// console.log( (a && b) == !!(a && b));
// ** теория
// Оператор || возвращает первый из операндов, значение которого 
// может быть приведено к логическому true. Если же оба операнда
// приводятся к логическому false, то оператор || вернет последнее значение.

// console.log('foo' || false); // 'foo'
// console.log(null || 'bar'); // 'bar'
// console.log(false || null); // null
// Это позволяет использовать всеми любимый широко известный 
// хак со значением переменной по умолчанию:

// function f(arg) {
//     var a = arg || 0;
//     // ...
// }
//Оператор && возвращает первый из операндов, 
// значение которого риводится к логическому false. 
// Если же оба операнда приводятся к true, 
// то оператор && вернет последний операнд.

// console.log(true && []); // []
// console.log(null && 'foo'); // null
// console.log('foo' && 'bar'); // 'bar'
// Что касается конструкции !!, то она используется 
// для явного приведения операнда к логическому типу:

// console.log(!!'foo'); // true
// console.log(!!''); // false
// console.log(!!0); // false
// console.log(!!1); // true
// Вернемся к вашему вопросу.

// Как вы уже могли догадаться, разница между выражениями

// !!(a && b); // (1)
// (a && b); // (2)
// заключается в типе возвращаемого значения. 
// Если обе переменные a и b оба имеют логический тип, то эти 
// выражения эквивалентны. В общем же случае, тип результата 
// выражения (2) определяется типом операндов, тогда как 
// выражение (1) всегда возвращает значение логического типа

// console.log( null || 2 && 3 || 4 ); // 3 - см. выше

// let a = [1, 2, 3]; 
// let b = [1, 2, 3];
// console.log(a == b);

// console.log( typeof(+"Infinity") );

// console.log("0451" > "044F"); 
// ё - 0451 больше я - 044F значит первое выраж. больше, 
// если равно, вторые буквы сравниваются а больше A

// console.log( 0 || "" || 2 || undefined || true || falsе ); // 2

// let num = 20;
// function showConsoleLog(text) {
//     console.log(text);
//     console.log(num);  // если нет в func ищет выше
// }

// showConsoleLog('Hi');

// function calc(a,b) {
//     return (a * b);
// }

// console.log( calc(2,2) );

// let calc2 = function(a,b) {
//     return (a + b);
// }

// console.log( calc2(8,7) ); // func exp можно использ. после объявл.

// let calc3 = (a,b) => a/b; // {} если функц. больше одной строки

// console.log( calc3(10,5) );

// let str = "test";
// console.log(str.length); // 4 - длина строки

// console.log(str.toUpperCase());
// console.log(str.toLowerCase());  // метод для строк

// let twelve = "12.2px";
// // console.log( Math.round(twelve) ); // отсекает дробь
// console.log( parseInt(twelve) ); 
// // возвращает 12
// console.log( parseFloat(twelve) );
// // возвращате 12.2 десятичные

// замыкания

// function createCounter() {                           // 1
//    let counter = 0;
//    const myFunction = function() {
//      counter = counter + 1;
//      return counter;
//    };
//    return myFunction;
//  }                                                   // 8
//  const increment = createCounter();                  // 9 
//  const c1 = increment();
//  const c2 = increment();
//  const c3 = increment();
// console.log('example increment', increment, c1, c2, c3);

// Вот как это работает. Когда вы объявляете новую функцию и
// присваиваете её переменной, то в этой переменной вы храните 
// не только определение функции, но и её замыкание. Замыкание
// содержит все переменные, которые находятся в области видимости 
// во время создания функции. Это аналогично рюкзаку. Определение
// функции идёт вместе с маленьким рюкзаком. А хранятся в нём все
// переменные, которые были в поле видимости в то время, 
// когда функция создавалась.

// 1-8 Мы создаём новую переменную createCounter в глобальной 
// области выполнения и присваиваем ей описание функции.
// 9. Мы объявляем новую переменную increment в глобальной 
// области выполнения. Нам нужно вызвать функцию createCounter 
// и присвоить возвращённое ей значение переменной increment
// 1-8 Вызываем функцию. Создаём новую локальную область выполнения
// 2. В локальной области выполнения объявляем новую 
// переменную counter. Число 0 присваивается counter
// 3–6 Объявляем новую переменную myFunction. Эта переменная 
// объявлена в локальной области выполнения. Пока что контентом 
// этой переменной является описание другой функции. Эта функция
// описана в строках 4 и 5. Но также мы создаём замыкание, 
// которое является частью функции. Замыкание хранит переменные 
// из своей области видимости. В нашем случае 
// это переменная КАУНТЕР (значение которой 0).
// 7. Возвращаем содержимое переменной myFunction. 
// Локальная область выполнения удалена. myFunction и counter 
// больше не существуют. Управление возвращено вызвавшей области.
// Таким образом мы возвращаем описание функции и её замыкание, 
// рюкзак с переменными, которые были в области видимости во время 
// её создания.
// 9. В вызвавшей области, глобальной области выполнения, значение,
// возвращаемое функцией createCounter присвоено переменной increment.
// Переменная increment теперь содержит определение функции (и
// замыкание). Определение функции, которое было возвращено из
// createCounter. Она больше не называется myFunction, но имеет 
// то же определение. В глобальной области она называется increment
// 10. Объявление новой переменной c1
// Смотрим на переменную increment. Это функция. Вызываем её. 
// Она содержит определение функции, которое было возвращено ранее 
// и было описано в строках 4-5 (в которой также хранится 
// и рюкзак с переменными)
// 4. counter = counter + 1. Ищем переменную counter. Перед тем, 
// как поискать в локальной или глобальной области выполнения, 
// давайте посмотрим в нашем рюкзаке. Проверяем замыкание.
// Оказывается, замыкание содержит переменную counter со значением 0.
// После выражения на строке 4 её значение установлено в 1. 
// И она снова хранится в рюкзаке. 
// Теперь замыкание хранит переменную counter со значением 1

// Когда функция возвращает функцию, тогда концепция замыканий
// становится более актуальной. Возвращаемая функция имеет доступ 
// к переменным, которые не находятся в глобальной области 
// видимости, но при этом существуют в её же замыкании.

// замыкания — это сравнение их с рюкзаком. Когда функция создана
// и передаётся куда-либо, или возвращается из другой функции, 
// то она носит с собой рюкзак. А в этом рюкзаке хранятся все
// переменные, которые были в области видимости во время создания 
// этой функции.

// console.log( isNaN('hello world') );        // true
// console.log( Number.isNaN(NaN) ); // true, иначе false


// callback функция вначале точно выполн. код console.log
// а потом callback()

// function learnJS(lang, callback) {
//     console.log("Я учу JS" + lang);
//     callback();
//     // setTimeout(() => console.log("Я учу JS" + lang), 5000);
// }

// function done() {
//     console.log("Я прошел 3-й урок");
// }

// learnJS("JavaScript", done);   // без ()

// object

// let obj = {
//     width: 1024,
//     heigth: 1024,
//     name: "test"
// };

// let a = "opredele";
// obj[a] = 393;
// obj.bool = false;

// obj.colors = {
//     border: "black",
//     bg: "red"    
// };

// delete obj.bool;
// // console.log(obj);

// for (let key in obj) {
//     console.log('Свойство: ' + key + ' значение: ' + obj[key]);
// }
// console.log(Object.keys(obj).length); // кол-во объектов

// массив

// let arr = [1,2,3,{},7];
// let n = arr.shift(); // удаляет и возвращает первый элемент
// let k = arr.pop(); // удаляет и возвращает последний элемент 
// arr.unshift({});   // добавляет первый элемент в массив
// arr.push("5");     // добавляет последний элемент в массив

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// arr.forEach(function(item, i, mass) {
//     console.log(i + ' : ' + item); // + " (массив: " + mass + ' )')
// });
// значение элемента (item)
// индекс элемента (i)
// массив, по которому осуществляется проход (mass)

// let arr = [1,2,3,4,8,9];

// for (let key in arr) {   // покажет ключи
//     console.log( key + ' => ' + arr[key] );
// }

// for (let key of arr) {  // покажет значения
//     console.log(key);
// }

// let ans = prompt("товары через запятую", ""),
//     arr = [];

// arr = ans.split(','); разбивает массив на по делиметру ','
// console.log(arr);

// let arr = ["A","l","e","x"]; // склеивает  
// console.log(arr.join(''));

// let arr = ["A","l","e","x"]; // сортирует по алфавиту  
// console.log(arr.sort());

// let arr = [1,15,4];
// arr.sort(compareNum);  // фун-я передается без ()

// function compareNum(a,b) {
//     return a-b;
// }

// console.log(arr);

// ООП

// let soldier = {     // базовый объект 
//     health: 400,
//     armor: 100
// };

// let jonh = {
//     health: 100
// };

// jonh.__proto__ = soldier;

// console.log(jonh);
// console.log(jonh.armor);

// function User(name) {        // фун-я конструктор с заглавной
//     this.name = name;        // this - это текущий объект User
  
//     this.sayHi = function() {
//       console.log( "Меня зовут: " + this.name ); // это текущий объект
//     };
//   }
  
//   let vasya = new User("Саша");
  
//   vasya.sayHi();

// class
  
// Базовый синтаксис для классов выглядит так:

// class MyClass {
//   prop = value; // свойство
//   constructor(...) { // конструктор
//     // ...
//   }
//   method(...) {} // метод
//   get something(...) {} // геттер
//   set something(...) {} // сеттер
//   [Symbol.iterator]() {} // метод с вычисляемым именем 
                            // (здесь символом)
//   // ...
// }
// MyClass технически является функцией (той, которую мы определяем
// как constructor), в то время как методы, геттеры и сеттеры
// записываются в MyClass.prototype.

// class Clock {
//     constructor({ template }) {
//       this.template = template;
//     }
  
//     render() {
//       let date = new Date();
  
//       let hours = date.getHours();
//       if (hours < 10) hours = '0' + hours;
  
//       let mins = date.getMinutes();
//       if (mins < 10) mins = '0' + mins;
  
//       let secs = date.getSeconds();
//       if (secs < 10) secs = '0' + secs;
  
//       let output = this.template
//         .replace('h', hours)
//         .replace('m', mins)
//         .replace('s', secs);
  
//       console.log(output);
//     }
  
//     stop() {
//       clearInterval(this.timer);
//     }
  
//     start() {
//       this.render();
//       this.timer = setInterval(() => this.render(), 1000);
//     }
//   }
  
  
//   let clock = new Clock({template: 'h:m:s'});
//   clock.start();

// наследование классов

// class Animal {
//     constructor(name) {
//       this.speed = 0;
//       this.name = name;
//     }
//     run(speed) {
//       this.speed = speed;
//       console.log(`${this.name} бежит со скоростью ${this.speed}.`);
//     }
//     stop() {
//       this.speed = 0;
//       console.log(`${this.name} стоит.`);
//     }
//   }
  
  // Наследуем от Animal указывая "extends Animal"
  // class Rabbit extends Animal {
  //   // переопределяем родительский конструктор с добавлением 
  //   // нового значения - earLength = длина уха
  //   constructor(name, earLength) {
  //       super(name);   // оставляем name за определенным в родителе
  //       this.earLength = earLength;
  //   }  
  //   hide() {
  //     console.log(`${this.name} прячется!`);
  //   }
  //   stop() {
  //       // переопределение родительской ф-ции stop
  //       // console.log(`${this.name} не двигается!`); 
  //       super.stop(); // вызываем родительский метод stop
  //       // или 
  //       // setTimeout(() => super.stop(), 1000); // через 1 сек.
  //       this.hide();  // и затем hide() этого класса
  //   }
  // }
  
  // let rabbit = new Rabbit("Белый кролик", "10 см.");
  
//   class Wolf extends Animal {
//       roar() {
//           console.log(`${this.name} рычит!`);
//       }
//   }
//   let wolf = new Wolf("Серый волк");
// wolf.stop();
//   console.log(rabbit);

// rabbit.run(5); // Белый кролик бежит со скоростью 5.
// console.log(`длина уха ${rabbit.name} - ` + rabbit.earLength);
//   rabbit.hide(); // Белый кролик прячется!

// статические свойства и методы

// class Article {
//   constructor(title, date) {
//     this.title = title;       // this при вызове Article.constructor()
//                               // является сам конструктор класса
//                               // Article
//                               // (правило «объект до точки»).
//     this.date = date;
//   }

//   static compare(articleA, articleB) {
//     return articleA.date - articleB.date;
//   }
// }

// // использование
// let articles = [
//   new Article("HTML", new Date(2019, 1, 1)),
//   new Article("CSS", new Date(2019, 0, 1)),
//   new Article("JavaScript", new Date(2019, 11, 1))
// ];

// articles.sort(Article.compare);

// console.log(articles[0].title); // CSS


// фабричный метод 

// class Article {
//   constructor(title, date) {
//     this.title = title;
//     this.date = date;
//   }

//   static createTodays() {
//     // помним, что this = Article
//     return new this("Сегодняшний дайджест " + new Date() );
//   }
// }

// let article = Article.createTodays();

// console.log( article.title ); // Сегодняшний дайджест

// Статическими их можно назвать только в контексте того, что если
// использовать функции как конструкторы, то в создаваемых объектах
// это свойство будет отсутствовать, и доступ к ним будет
// осуществляться только по имени класса.

// приватные и защищенные методы и свойства

