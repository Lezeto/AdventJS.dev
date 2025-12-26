function manufactureGifts(giftsToProduce) {
  let lista=[];
  giftsToProduce.forEach(x=>{
    for (let i=0; i<x.quantity; i++){
      lista.push(x.toy);
    }
  })
  return lista;
}