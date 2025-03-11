function isValidVariable(variable)
{
    
    if (variable.match(/[!@#%\^\&*\)\(+=.-]/g)) 
        {
        return "Is Invalid Variable.";
    }
    else
    {
        return "Valid Variable.";
    }


}

const checkingVaiable = isValidVariable("krishnan2");

console.log(checkingVaiable);



