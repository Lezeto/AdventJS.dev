function findUniqueToy(toy) {
  // Code here
  let toyMinus=toy.toLowerCase();
  for (let i=0; i<toy.length; i++){
    let toySini= toyMinus.slice(0,i)+toyMinus.slice(i+1);
    if (!toySini.includes(toyMinus[i])){return toy[i]}
  }
  return "";
}