const veg = ['Avocado', 'Tomato', 'Potato', 'Mango', 'Lemon', 'Carrot'];

const newVeg = [];

let random = () => {
    const numCheck = [];
    while (numCheck.length < veg.length) {
        let randomNum = Math.floor(Math.random() * veg.length); 

        if (!numCheck.includes(randomNum)) {
            numCheck.push(randomNum); 
            newVeg.push(veg[randomNum]); 
        }
    }

    console.log(newVeg);    
};

random();
    