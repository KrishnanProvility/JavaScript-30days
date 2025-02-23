const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]

  let bigWord ="";


  for(let i = 0;i<=webTechs.length-1;i++)
  {
if(webTechs[i].length>bigWord.length)
{
    bigWord =webTechs[i];
}
  }

  console.log(bigWord);