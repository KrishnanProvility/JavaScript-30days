const day =prompt("what is the day today?").toLowerCase();
console.log(day)

switch(day)
{

case "sunday":
    console.log(day +" is a weekend. ");
    break;
case "saturday":
    console.log(day +" is a weekend. ");
    break;
case "monday":
    console.log(day +" is a working day. ");
    break;
case "tuesday":
    console.log(day +" is a working day. ");
    break;
case "wednesday":
    console.log(day +" is a working day. ");
    break;
case "thursday ":
    console.log(day +" is a working day. ");
    break;
case "friday":
    console.log(day +" is a working day. ");
    break;
default:
    console.log("Please Enter correct day.")
}
