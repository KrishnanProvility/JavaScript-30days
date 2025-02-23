const hexa =['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
const rgb =[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
const HASH = '#';

const convertedArray =[];
let count =0;
function randomHexaNumberGenerator()
{
    let script =HASH;
for(let i = 0 ;i<6 ;i++)
{
    const randomNumber =Math.floor(Math.random()*hexa.length); 
    script=script.concat(hexa[randomNumber]);
    }
    return script
}
let HexaColor = randomHexaNumberGenerator()
hexaToRgbconvert(HexaColor);
function hexaToRgbconvert(HexaColor){
for(let i = 1  ;i<HexaColor.length ;i+=2)
{
    const index1 = isNaN(HexaColor[i]) ? hexa.indexOf(HexaColor[i]): parseInt(HexaColor[i]);
    const index2 = isNaN(HexaColor[i+1]) ? hexa.indexOf(HexaColor[i+1]): parseInt(HexaColor[i+1]);

    const firstValue = rgb[index1] ;
    const secondValue =rgb[index2] ;
    convertedArray.push(firstValue * 16 + secondValue);
      }
    }
console.log(`Generated Hex Color: ${HexaColor}`);
console.log(`Converted RGB Values: (${convertedArray[0]}, ${convertedArray[1]}, ${convertedArray[2]})`);









