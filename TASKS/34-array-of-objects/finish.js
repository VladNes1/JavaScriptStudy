/** ЗАДАЧА 34 - Массив объектов
 *
 * 1. Создайте массив с 3 объектами "cars"
 *
 * 2. Каждый объект должен иметь три свойства
 *  - carBrand (строка)
 *  - price (число)
 *  - isAvailableForSale (логическое значение)
 *
 * 3. Добавьте еще один объект в массив
 *
 * 4. Выведите результирующий массив в консоль
 */


const cars = [
    {
        carBrand: "BMW",
        price: 100,
        isAvailableForSale: true
    },

    {
        carBrand: "Honda",
        price: 120,
        isAvailableForSale: false
    },

    {
        carBrand: "Audi",
        price: 200,
        isAvailableForSale: true
    }
]


console.log(cars);

cars.push({
    carBrand: "Volvo",
    price: 80,
    isAvailableForSale: false
});

console.log(cars);
console.log(cars.length);
