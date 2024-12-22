const sortedByName = [...aa].sort((fistcount, secondcount) => {
  if (fistcount.name < secondcount.name) {
    return -1;
  } else if (fistcount.name > secondcount.name) {
    return 1;
  }
  return 0;
});
console.log("Sorted by Name:", sortedByName);
