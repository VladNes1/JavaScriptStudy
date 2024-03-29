/** ЗАДАЧА 75 - Перебор символов строки
 *
 * Подсчитайте количество строчных гласных букв в строке.
 * Гласные буквы - a, e, i, o, u
 */

let vowelsCount = 0
const vowels = ['a', 'e', 'i', 'o', 'u']

const str = 'Today is the best day of my life'

// console.log(str.split(""));

//var1
// str.split("").forEach((char) => {
//     if (vowels.includes(char)) {
//         vowelsCount += 1;
//     }
// })

//var 2

for (const char of str) {
    if (vowels.includes(char)) {
        vowelsCount += 1;
    }
}

// Напишите код здесь

console.log(vowelsCount)
// 9
