//exercise 1:

const date = new Date('July 1, 1999, 12:00:00');

const hour = date.getHours();

const mins = date.getMinutes();
 
const  updatedHours = hour.toString().length==1? "0"+ date.getHours() :date.getHours() ;

const  updatedmins = hour.toString().length==1? "0"+ date.getMinutes() :date.getMinutes() ;

console.log(updatedHours);

console.log(updatedmins);



