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
// console.log(apple.category);


let address: number | string = '';

address = '東京都港区芝' + 1 + '丁目';
// console.log(address)

//　型推量で無理やりjsにコンパイル
let object1 = {
    add : function(val1, val2) { 
        console.log(this.value + val1 + val2);
    }
};
let object2 = {
    value: 3
};
const apply = object1.add.apply(object2, [1, 2]); //6
const call = object1.add.call(object2, 1, 2); //6

