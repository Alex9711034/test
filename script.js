'use strict';

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
// alert( ++x ); // будет 5

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
// Оператор || возвращает первый из операндов, значение которого может быть приведено к логическому true. Если же оба операнда приводятся к логическому false, то оператор || вернет последнее значение.

// console.log('foo' || false); // 'foo'
// console.log(null || 'bar'); // 'bar'
// console.log(false || null); // null
// Это позволяет использовать всеми любимый широко известный хак со значением переменной по умолчанию:

// function f(arg) {
//     var a = arg || 0;
//     // ...
// }
// Оператор && возвращает первый из операндов, значение которого приводится к логическому false. Если же оба операнда приводятся к true, то оператор && вернет последний операнд.

// console.log(true && []); // []
// console.log(null && 'foo'); // null
// console.log('foo' && 'bar'); // 'bar'
// Что касается конструкции !!, то она используется для явного приведения операнда к логическому типу:

// console.log(!!'foo'); // true
// console.log(!!''); // false
// console.log(!!0); // false
// console.log(!!1); // true
// Вернемся к вашему вопросу.

// Как вы уже могли догадаться, разница между выражениями

// !!(a && b); // (1)
// (a && b); // (2)
// заключается в типе возвращаемого значения. Если обе переменные a и b оба имеют логический тип, то эти выражения эквивалентны. В общем же случае, тип результата выражения (2) определяется типом операндов, тогда как выражение (1) всегда возвращает значение логического типа

// console.log( null || 2 && 3 || 4 ); // 3 - см. выше

// let a = [1, 2, 3]; 
// let b = [1, 2, 3];
// console.log(a == b);

// console.log( typeof(+"Infinity") );

// console.log("0451" > "044F"); 
// ё - 0451 больше я - 044F значит первое выраж. больше, 
// если равно, вторые буквы сравниваются а больше A

// console.log( 0 || "" || 2 || undefined || true || falsе ); // 2

