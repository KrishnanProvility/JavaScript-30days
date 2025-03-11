class animal{
    constructor(name, age, color, legs) {
        this.name =name;
        this.age = age;
        this.color =color;
        this.legs =legs
    }

}

class Dog extends animal{
    constructor(name, age, color, legs,sound){
        super(name, age, color, legs)
        this.sound =sound;
    }
    dogInfo(){
        return `my dog name is ${this.name} and age is ${this.age}.color ${this.color}. it have  ${this.legs} give sound ${this.sound} `
    }
}

class Cat extends animal {
    constructor(name, age, color, legs, sound) {
        super(name, age, color, legs)
        this.sound = sound;
    }

    catInfo() {
        return `my cat name is ${this.name} and age is ${this.age}.color ${this.color}. it have  ${this.legs} give sound ${this.sound} `
    }

}
const dog =new Dog('raja',12,'blue',4,'bow bow')

const cat = new Cat('micky',15,'white',3,'meow')
console.log(dog.dogInfo());
console.log(cat.catInfo());