
const titles =document.querySelectorAll('p')

titles.forEach((title,index)=>{

    if(index %2==0)
    {
        title.style.backgroundColor ='red';
    }
    else{
        title.style.backgroundColor ='green';
    }
    title.style.color ='white';
   
    title.style.textAlign ='center';
    title.style.border ='solid 10px black';
    title.style.fontSize ='50px';
});

