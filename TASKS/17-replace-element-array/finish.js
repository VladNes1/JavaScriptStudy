/** ЗАДАЧА 17 - Замена элементов массива
 *
 * 1. Создайте массив с нескольким элементами разных типов
 *
 * 2. Выведите в консоль весь массив
 *
 * 3. Замените второй элемент массива на другой
 *
 * 4. Выведите в консоль измененный массив
 */


const arrNew = [2, true, "bye"];
console.log(arrNew);


// for (let i = 0; i < arrNew.length; i++) {
//     console.log(arrNew[i])
// }

arrNew[1] = false;
console.log(arrNew);
// for (let i = 0; i < arrNew.length; i++) {
//     console.log(arrNew[i])
// }