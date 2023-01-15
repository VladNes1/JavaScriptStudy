/** ЗАДАЧА 21 - Сравнение переменных
 *
 * 1. Сравните 2 переменные "myVariable1" и "myVariable2".
 * Выведите в консоль "true", если значение "myVariable1" меньше или равно "myVariable2".
 *
 * 2. Преобразуйте обе переменные в числа перед сравнением.
 */

let myVariable1 = 10
let myVariable2 = '5'

// Напишите код здесь
// вариант 1 конвертации в число
console.log(typeof parseInt(myVariable2));

// вариант 2 конвертации в число
console.log(typeof +myVariable2);

console.log(parseInt(myVariable1) <= parseInt(myVariable2));


myVariable1 = '20'
myVariable2 = 100
// Напишите код здесь

console.log(parseInt(myVariable1) <= parseInt(myVariable2));
