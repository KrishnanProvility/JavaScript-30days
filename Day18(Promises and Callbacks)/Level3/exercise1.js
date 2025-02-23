const catsAPI = 'https://api.thecatapi.com/v1/breeds';

const fetchCatName = async()=> {
try {
  const responce =await fetch(catsAPI);
  const cats =await responce.json();
  const catsweight = cats.map((cat)=> cat.weight.metric);
     const averager =catAverage(catsweight)
  console.log(averager);
  
} catch (error) {
  console.log(error);
  
}
}

fetchCatName()

function catAverage(range){
  let total=0;
  let count =0;
  range.forEach(element => {

    const [low,high]=element.split('-').map(Number);
    const mid =low+high/2
    total+=mid;
    count++;
  });
  return total/count; 
}