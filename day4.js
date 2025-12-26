function decodeSantaPin(code) {
  let codeSinPrimeroUltimo=code.slice(1,-1);
  let codeLista=codeSinPrimeroUltimo.split("][");
  let resultado="";
  codeLista.forEach(bloque=>{
    let numeroString=bloque[0];
    if (numeroString==="<"){resultado+=resultado.slice(-1)}else{
      let numero= Number(bloque[0]);
      let operaciones= bloque.slice(1);
      let cantidadOperaciones= operaciones.length;
      for (let i=0; i<cantidadOperaciones; i++){
        if (operaciones[i]==="+"){numero++}else{numero--}
      }
      if (numero>=0 && numero<=9){resultado+=numero} else{
        if (numero>9){resultado+= String(numero).slice(-1)}else{
          numero=10+numero;
          resultado+=numero;
        }
      }
    }
  })
  let resultadoLength=resultado.length;
  if(resultadoLength<4){return null} else {return resultado}

}