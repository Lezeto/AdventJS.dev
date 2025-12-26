function dropGifts(warehouse, drops) {
  let dropsQuantity=drops.length;
  let warehouse2 = warehouse.map(lista => [...lista]);
  let altura= warehouse.length;
  for (let i=0; i<dropsQuantity; i++){
    for (let n= altura-1; n>=0; n--){
      if (warehouse2[n][drops[i]]==="."){warehouse2[n][drops[i]]="#"; break}
    }
  }
  return warehouse2;
}