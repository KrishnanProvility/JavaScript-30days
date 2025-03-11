const scores =prompt("Enter Your score 0-100");

if(scores>=80 && scores<=100)
{
console.log("Grade:A");
}
else if(scores>=70 && scores<=89)
{
    console.log("Grade:B");
}
else if(scores>=60 && scores<=69)
    {
        console.log("Grade:C");
    }
    else if(scores>=50 && scores<=59)
        {
            console.log("Grade:D");
        }
        else if(scores>=0 && scores<=49)
            {
                console.log("Grade:F");
            }