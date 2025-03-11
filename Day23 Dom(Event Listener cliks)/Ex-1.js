const keyContainer = document.querySelector('.container');
const result = document.querySelector('.result');
const h2 = document.querySelector('h2'); 
const p = document.querySelector('p'); 

document.body.addEventListener('keypress', (e) => {
    keyContainer.style.display = 'none'; 
    result.style.display = 'block'; 
    const keyPressed = e.key === ' ' ? 'Space' : e.key; 
    
    h2.textContent = `You pressed: ${keyPressed}`;
    h2.style.color = 'lightgreen';
    p.textContent = `Key Code: ${e.keyCode}`; 
});
