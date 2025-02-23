
function swapValues(x,y)
{
    let temp =x;
    x=y;
    y =temp;

    console.log(`X =>${x} Y => ${y}`);


}

const x= parseInt(prompt("Enter X value :"));
const y= parseInt(prompt("Enter y value :"));

swapValues(x,y);