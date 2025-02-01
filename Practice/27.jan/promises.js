const promise =new Promise((resolve,reject)=>{
    setTimeout(()=>{
      const skills=['js','CSS','html']
      if(skills.length>0)
      {
        resolve(skills)
      }
      else{
        reject('empty array')
      }
    })
  })

  promise.then(result=>{
     console.log(result)
     return result
  }).then(result=>{
    console.log(result+' again');
  }).catch((reject)=>console.log(reject))