const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

shoppingCart.push('water bottel');
console.log("added in an array:"+shoppingCart);

shoppingCart.pop();
console.log("remove in an array:"+shoppingCart);

shoppingCart[0]="MilkShake";
console.log("edit in an array:"+shoppingCart);

console.log(shoppingCart.shift('Meat'));

console.log(shoppingCart.push('sugar'));

console.log(shoppingCart);
console.log(shoppingCart.slice)