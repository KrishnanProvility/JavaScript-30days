const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]


  const newWebtechs =[];


  for(let i = 0;i<=webTechs.length-1;i++)
  {

    

    newWebtechs.push(webTechs[i],webTechs[i].length);
  }

  console.log(newWebtechs)