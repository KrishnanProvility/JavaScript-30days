//08/01/2020 04:08

function showDateTime()
{
    const now = new Date()
    
    const year = now.getFullYear();
    
    const  month = now.getMonth().toString().length==1? "0"+ (now.getMonth()+1) :now.getMonth() +1;

    const  date = now.getDate().toString().length==1? "0"+ now.getDate() :now.getDate() ;
    
    const  hours = now.getHours().toString().length==1? "0"+ now.getHours() :now.getHours() ;
   
    const  minutes = now.getMinutes().toString().length==1? "0"+ now.getMinutes() :now.getMinutes() ;

    console.log(`${date}/${month}/${year}  ${hours}:${minutes}`)

}

showDateTime();