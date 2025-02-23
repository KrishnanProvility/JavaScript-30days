
const titles =document.querySelectorAll('p')
const details =['First','Second','Third','Fourth'];

titles.forEach((title,index)=>{

    title.setAttribute('class',details[index]);
    title.setAttribute('id',details[index]);
    title.textContent =details[index];
    
});

