

function bmi(weight , meter)
{
    let bMI =weight /(meter*meter);
    
    if(bMI< 18.5)
        {
            console.log("Underweight");
            
        }
        else if(bMI<=24.9)
        {
            console.log("normal Weight");
        }
        else if(bMI<=29.9)
            {
                console.log("over Weight");
            }
        else
        {
            console.log("Obese");
        }
        
}

bmi(90,1.8288)



