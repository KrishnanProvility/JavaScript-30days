const catsAPI = 'https://api.thecatapi.com/v1/breeds';

const fetchCatName = async()=> {
try {
  const responce =await fetch(catsAPI);
  const cats =await responce.json();
  const catsname = cats.map((cat)=> cat.name)
  console.log(catsname);
  
} catch (error) {
  console.log(error);
  
}
}

fetchCatName()