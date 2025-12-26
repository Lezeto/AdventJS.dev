function hasFourLights(board) {
  let filas= board.length;
  let largoFila= board[0].length;
  
  if (largoFila>=4){
    for (let fila=0; fila<filas; fila++){
      for (let i=0; i<largoFila-3; i++){
        let a=board[fila][i];
        let b=board[fila][i+1];
        let c=board[fila][i+2];
        let d=board[fila][i+3];
        if (a===b && b===c && c===d && a!== "."){return true}
      }}}
  
  if (filas>=4){
    for (let fila=0; fila<filas-3; fila++){
      for (let i=0; i<largoFila; i++){
        let a=board[fila][i];
        let b=board[fila+1][i];
        let c=board[fila+2][i];
        let d=board[fila+3][i];
        if(a===b && b===c && c===d && a!== "."){return true}
      }}}
  
  return false
}