const Practice_callback =practice=>{
    setTimeout(()=>{
      const mySkills =['hero','villan','comedien','heroine']
      callBack(false,mySkills)
    },2000)
  }
  
  function callBack(err,result){
    if(err){
      return console.log(err);
    }
    else{
      return console.log(result)
    }
  }
  Practice_callback(callBack);