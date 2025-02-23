//Exercise 1:

//const dog =Object();

//Exefcise 2:
//console.log(dog);

//name, legs, color, age and bark properties

//exericse 3:

const dog ={name :"jummy",
    leg :"Four" ,
    age : 8 ,
    bark :function() {
    return "woof woof"},
    color :"red",
    bread : "german sheperd" ,
    Doginfo :function(){
        return `my dog name is ${this.name} \n
        and color is ${this.color}.\n
        breed of my dog is ${this.bread}.
        `
    }
};
//exercise 4:
console.log(dog.bark())
console.log(dog.name);
console.log(dog.color);
console.log(dog.age);
console.log(dog);

//exercise 5:

console.log(dog.Doginfo());
