function matchGloves(gloves) {
  let glovesPorRevisar=[];
  let glovesEncontrados=[];

  gloves.forEach(glove=>{
    glovesPorRevisar.push(glove);
    for(let i=0; i<glovesPorRevisar.length; i++){
      if (glove.hand!== glovesPorRevisar[i].hand && glove.color === glovesPorRevisar[i].color){
        glovesEncontrados.push(glove.color);
        glovesPorRevisar.pop();
        glovesPorRevisar.splice(i,1);
      }
    }
  })
  return glovesEncontrados;
}