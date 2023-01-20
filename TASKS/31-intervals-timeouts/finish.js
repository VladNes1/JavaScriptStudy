/** ЗАДАЧА 31 - Интервалы и Таймауты
 *
 * Используйте следующие встроенные функции:
 * setTimeout
 * setInterval
 * clearInterval
 *
 * Нужно вывести в консоль ТОЛЬКО 5 сообщений с интервалом 2 секунды:
 * "Сообщение номер 1"
 * "Сообщение номер 2"
 * "Сообщение номер 3"
 * "Сообщение номер 4"
 * "Сообщение номер 5"
 */

// function showInfo() {
//     for (let i = 1; i <= 5; i++) {
//         console.log("Сообщение номер " + i)
//     }
// }
//
// setTimeout(showInfo, 2000)

let sms = 1;
const messageID = setInterval(()=> {
    console.log("Сообщение номер " + sms++)
}, 2000)


setTimeout(() => {
    clearInterval(messageID)
}, 11000);