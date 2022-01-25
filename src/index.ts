//npx tsc > (ls dist >) node dist/index.js　

function hello(user: string): string {
    return `hello, ${user}`;
}
// console.log(hello("typescript"));


let fruits: string[] = [ 'apple', 'orange', 'grape'];
function juicer(fruit: string): string {
    return fruit + "juice";
}
// console.log(juicer(fruits[0]));
// console.log(fruits.map(juicer)) ;


interface clients {
    clientName: string;
    phoneNumber: string;
}
let hiiragi: clients;
hiiragi = {
    clientName: 'ひいらぎ不動産株式会社',
    phoneNumber: '03-XXXX-XXXX'
};
// console.log(hiiragi);


enum FoodCategory {
    MEAT,
    FISH,
    VEGETABLE,
    FRUITS
}

const apple = {
    scientificName: 'Malus domestica',
    category: FoodCategory.FRUITS
}
// console.log(FoodCategory[0]);
// console.log(apple);


let address: number | string = '';

address = '東京都港区芝' + 1 + '丁目';
console.log(address)


