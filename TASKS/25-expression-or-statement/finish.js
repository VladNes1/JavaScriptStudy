/** ЗАДАЧА 25 - Выражение или инструкция
 *
 * Определите тип каждой конструкции JavaScript:
 *  - выражение (expression)
 *  - инструкция (statement)
 *  - выражение-инструкция (expression statement)
 */

//выражение-инструкция
15

//выражение
const myObject = { //-инструкция
  x: 10,
  y: true,
}


//выражение-инструкция
myObject.z = 'abc' //выражение

//выражение-инструкция
delete myObject.x

//инструкция
let newVariable

//выражение-инструкция
newVariable = 30 + 5 //выражение


//выражение-инструкция
console.log(newVariable) //выражение то что в скобках


//инструкция
if (newVariable > 10) {//выражение

  console.log(`${newVariable} больше 10`)
}
