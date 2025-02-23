const button =document.querySelector('button');

button.addEventListener('click',e =>{
  console.log(`give the event listener object ${e}`,e);
  console.log(`give the event listener target ${e.target}`,e.target.textContent);
  
})

const span = document.querySelector('span');

span.addEventListener('dblclick',e=>{
  console.log('dbl click out put : ',e.target.textContent)
})

button.addEventListener('mousemove', e => {
  console.log('e gives the event listener object:', e)
  console.log('e.target gives the selected element: ', e.target)
  console.log(
    'e.target.textContent gives content of selected element: ',
    e.target.textContent
  )
})