const fruits =['apple','banana','grapes','mango','orange'];

const objectFruits = [
    { name: 'Apple', color: 'Red', taste: 'Sweet' },
    { name: 'Banana', color: 'Yellow', taste: 'Sweet' },
    { name: 'Grapes', color: 'Purple', taste: 'Sour' },
    { name: 'Mango', color: 'Orange', taste: 'Sweet' },
    { name: 'Orange', color: 'Orange', taste: 'Citrusy' }
];

const store = {
    name: "Fruit Market",
    location: "Downtown",
    categories: ["Fresh Fruits", "Dried Fruits", "Exotic Fruits"],
    inventory: [
        {
            category: "Fresh Fruits",
            items: [
                { name: "Apple", color: "Red", price: 2, stock: 50 },
                { name: "Banana", color: "Yellow", price: 1, stock: 30 },
                { name: "Grapes", color: "Purple", price: 3, stock: 40 }
            ]
        },
        {
            category: "Dried Fruits",
            items: [
                { name: "Dates", color: "Brown", price: 5, stock: 20 },
                { name: "Raisins", color: "Dark Brown", price: 4, stock: 25 }
            ]
        },
        {
            category: "Exotic Fruits",
            items: [
                { name: "Dragon Fruit", color: "Pink", price: 7, stock: 15 },
                { name: "Mangosteen", color: "Purple", price: 8, stock: 10 }
            ]
        }
    ]
};


//By map
const fruitesbySentencemap =fruits.map((fruit)=>{
    return `this is ${fruit}`
})

console.log('using map '+fruitesbySentencemap);

//By for

const fruitesbySentencefor=[];

for(let i =0;i<fruits.length;i++)
{
   // fruitesbySentencefor.push('this is '+fruits[i]);
}
console.log(`using for ${fruitesbySentencefor}`);


//by for of

for(let fruit of fruits){
    fruitesbySentencefor.push('this is '+fruit);

}
console.log(`using for of ${fruitesbySentencefor}`);

///map of object 

const fruitDescriptions = fruits.map(fruit => 
    `The ${fruit.name} is ${fruit.color} and tastes ${fruit.taste}.`
);

console.log(fruitDescriptions);


//// object for 
const fruitesbySentenceForObject=[];


for(let i =0;i<objectFruits.length;i++)
{
    fruitesbySentenceForObject.push( `The ${objectFruits[i].name} is ${objectFruits[i].color} and tastes ${objectFruits[i].taste}.`);
}


console.log(fruitesbySentenceForObject);


//object filterd

const sweetFruits = [];

for (let i = 0; i < objectFruits.length; i++) {
    if (objectFruits[i].taste === 'Sweet') {
        sweetFruits.push(objectFruits[i]);
    }
}

console.log(sweetFruits);




/////////////////////////////////For the categories ///////////////////////////

for(let i = 0;i<store.inventory.length;i++)
{
    console.log(store.inventory[i].category);
    
}


//Extract all fruit names into a single array.

const fruitNames = [];
for (let i = 0; i < store.inventory.length; i++) {
    for (let j = 0; j < store.inventory[i].items.length; j++) {
        fruitNames.push(store.inventory[i].items[j].name);
    }
}
console.log(fruitNames);

//Find the total stock of all fruits combined

let totalStock = 0;
for (let i = 0; i < store.inventory.length; i++) {
    for (let j = 0; j < store.inventory[i].items.length; j++) {
        totalStock += store.inventory[i].items[j].stock;
    }
}
console.log( totalStock);

//Get only the fruits priced above $3  filtering

const expensiveFruits = [];
for (let i = 0; i < store.inventory.length; i++) {
    for (let j = 0; j < store.inventory[i].items.length; j++) {
        if (store.inventory[i].items[j].price > 3) {
            expensiveFruits.push(store.inventory[i].items[j]);
        }
    }
}
console.log(expensiveFruits);


//Get names of all fruits from "Fresh Fruits" category

const freshFruitNames = [];
for (let i = 0; i < store.inventory.length; i++) {
    if (store.inventory[i].category === "Fresh Fruits") {
        for (let j = 0; j < store.inventory[i].items.length; j++) {
            freshFruitNames.push(store.inventory[i].items[j].name);
        }
    }
}
console.log(freshFruitNames);
