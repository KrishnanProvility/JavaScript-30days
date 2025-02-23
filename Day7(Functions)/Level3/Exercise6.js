
let rgbColorGenerator = ()=>{const randomNumber = Math.floor(Math.random()*999);
    console.log(`rgb(${randomNumber},180,80)`)}
 
const rgbArray = [26, 43, 60];
const hexColor = rgbToHexConvert(rgbArray);

function rgbToHexConvert(rgbArray) {
    let hexColor = "#";
    for (let i = 0; i < rgbArray.length; i++) {
      const firstValue = Math.floor(rgbArray[i] / 16);
      const secondValue = rgbArray[i] % 16;
      hexColor = hexColor.concat(hexa[firstValue], hexa[secondValue]);
    }
    return hexColor;
  }

  console.log(`RGB Array: (${rgbArray[0]}, ${rgbArray[1]}, ${rgbArray[2]})`);
  console.log(`Converted Hex Color: ${hexColor}`);






