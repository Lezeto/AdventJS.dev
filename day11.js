/**
 * @param {string[]} warehouse - The warehouse layout
 * @returns {number} The count of unwatched gifts
 */
function findUnsafeGifts(warehouse) {
  // Code here
  let noVigilados=0;
  for (let fila=0;fila<warehouse.length;fila++){
    for (let i=0; i<warehouse[0].length; i++){
      if(warehouse[fila][i]==="*"){
        let vigilado=false;
        if (fila-1>=0){
          if(warehouse[fila-1][i]==="#"){vigilado=true}
        }
        if (fila+1<warehouse.length){
          if(warehouse[fila+1][i]==="#"){vigilado=true}
        }
        if (i-1>=0){
          if(warehouse[fila][i-1]==="#"){vigilado=true}
        }
        if (i+1<warehouse[0].length){
          if(warehouse[fila][i+1]==="#"){vigilado=true}
        }

        if(vigilado===false){noVigilados++}
        
      }
    }
  }
  return noVigilados
}