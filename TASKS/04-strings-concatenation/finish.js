/** ЗАДАЧА 4 - Объединение строк
 *
 * 1. Объявите три переменные с значениями:
 *  - ваше имя
 *  - ваша фамилия
 *  - ваша профессия
 *
 * 2. Создайте еще одну переменную. Ее значение должно быть, например
 * "Меня зовут <Имя> <Фамилия> и я <Профессия>"
 *
 * 3. Выведите значение последней переменной в консоль
 */

const myName = "Vlad";
const mySurname = "Nes";
const myJob = "programer";

const myInfo = "Меня зовут " + myName + " " + mySurname + " и я " + myJob;
const myInfo2 = `Меня зовут ${myName} ${mySurname} и я ${myJob}`;

console.log(myInfo);
console.log(myInfo2);
