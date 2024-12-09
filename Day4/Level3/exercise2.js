let month =prompt("Enter the month :").toLowerCase();
let guessDay ;
if(month==="january"||month==="march"||month==="may"||month==="july"||month==="october"||month==="august"||month==="december")
{
    guessDay ="odd";
}
else if(month==="june"||month==="april"||month==="september"||month==="november")
    {
        guessDay ="even";
    }
    else if (month === "february")
         {
        year = parseInt(prompt("Enter the year:"), 10);
        if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
          guessDay = "leapFeb";
        } else {
          guessDay = "feb";
        }
      } 
      else {
        guessDay = "default";
      }
    
switch(guessDay)
{

   
    case "odd":
        console.log(month+" has 31 Days." );
        break;    
    case "even":
        console.log(month+" has 30 Days." );
        break;    
    case "feb":
        console.log(month + " has 28 days.");
        break;
    case "leapFeb":
        console.log(month + " has 29 days.");
        break;  
default:
    console.log("Incorrect month");
}   