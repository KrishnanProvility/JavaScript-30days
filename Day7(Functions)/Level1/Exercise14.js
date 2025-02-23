const month =prompt("Enter the month :").toLowerCase();

checkSeason(month)
function checkSeason(month)
{

    switch(month)
    {
        case "december":
        case "january":  
        case "february":
            console.log(" winter season ");
            break;    
        case "march":
        case "april":    
        case "may":
            console.log(" spring season ");
            break;    
        case "june":  
        case "july":    
        case "august":
            console.log(" summer season ");
            break;    
        case "september":  
        case "october": 
        case "november":
            console.log(" autumn season ");
            break;   
       
    default:
        console.log("Incorrect month")
    }
}