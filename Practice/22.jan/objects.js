const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 },
  ];
  let oldestPerson=0;
  
  //print all the person array names:
  for (let i = 0; i < people.length; i++) {
      console.log('name:' +people[i].name);
      
  }
  //print all oldest person:
  for (let i = 0; i < people.length; i++) {
      if(people[i].age>oldestPerson){
          oldestPerson = people[i].age;
      }
  }
  console.log('oldest Person :' + oldestPerson);
  
  //print name who have older 30
  
  for (let i = 0; i < people.length; i++) {
      if(people[i].age>=30){
          console.log(people[i].name);
      }
  }