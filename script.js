console.log("hello NV");

const clients = [

];

const a = [3,1,1,4,6,8,3,4,2,3,3];
console.log(a);

// filter всегда возвращает либо тру либо фолс
let b = a.filter(item => {
    if (item > 2)
   return true;
});

console.log(b);