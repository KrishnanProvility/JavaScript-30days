function generateColors(colorCode, num){
    colorCode.toLowerCase();
        if(colorCode =="hexa")
        {
            arrayOfHexaColors();
        }
        else
        {
            rgbColorGenerator();
        }
    
    function arrayOfHexaColors()
    {
        const charachters =[0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f'];
        let script ="";
        
       let arrayOfHexaColors=[]
    for(let j =0 ;j<num ;j++)
    {
        script ="";
        script=script.concat("#")
    
        for(let i = 0 ;i<6 ;i++)
    { 
        const randomNumber =Math.floor(Math.random()*charachters.length); 
        script =script.concat(charachters[randomNumber])
        }
         arrayOfHexaColors.push(script);
    }
    console.log(arrayOfHexaColors)
    }
    
    function rgbColorGenerator(){
        
        const rgbColorArray =[];
        for(let i = 0  ;i<num ;i++)
        {
        const randomNumber = Math.floor(Math.random()*999);
        rgbColorArray.push(`rgb(${randomNumber},180,80)`)
    }
    console.log(rgbColorArray)
    }
        
    }
    
    let colorCoded =prompt("enter hexa or rgb color code:")
    let number =prompt("enter number of arrays:")
    
    generateColors(colorCoded, number);