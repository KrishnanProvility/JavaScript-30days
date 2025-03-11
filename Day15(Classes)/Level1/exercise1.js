
class Dog {
    constructor(name, age, color, legs) {
        this.name =name;
        this.age = age;
        this.color =color;
        this.legs =legs
    }
    dogInfo(){
        return `${this.name} ${this.age} ${this.color} ${this.legs} `
    }
}


const dog =new Dog('raja',12,'blue',4)

console.log(dog.dogInfo());
