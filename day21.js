function clearGifts(warehouse, drops) {
  let warehouse2 = warehouse.map(lista => [...lista]);;
  let largo= warehouse[0].length;
  for (let i=0; i<drops.length; i++){
    for (let n= warehouse.length-1; n>=0; n--){
      if (warehouse2[n][drops[i]]==="."){
        warehouse2[n][drops[i]]="#";
        if(!warehouse2[n].includes(".")){
          warehouse2.splice(n,1);
          warehouse2.unshift(Array(largo).fill("."));
         }
        break;
        }
    }
  }
  return warehouse2;
}