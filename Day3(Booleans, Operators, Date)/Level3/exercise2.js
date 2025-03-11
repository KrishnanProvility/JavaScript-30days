//EXCERSICE  2:
const now = new Date('July 1, 1999, 07:00:00')
const year = now.getFullYear()
const monthWithOutZero = now.getMonth() ;

const  month = monthWithOutZero.toString().length==1? "0"+ (now.getMonth()+1) :now.getMonth() +1;

const dateWithOutZero = now.getDate()


const  date = monthWithOutZero.toString().length==1? "0"+ now.getDate() :now.getDate() ;

const hourWithOutZero = now.getHours()

const  hours = monthWithOutZero.toString().length==1? "0"+ now.getHours() :now.getHours() ;

const minWithOutZero = now.getMinutes()

const  minutes = monthWithOutZero.toString().length==1? "0"+ now.getMinutes() :now.getMinutes() ;

console.log(`${year}-${month}-${date} ${hours}:${minutes}`) ;
