const board = `
.....
.*#.*
.@...
.....
`;

function moveReno(board, moves) {
let boardLista= board.split("\n").slice(1,-1);
let renoFila=0;
let renoi=0;
for (let fila=0; fila<boardLista.length; fila++){
    if (boardLista.includes("@")){
        renoFila=fila;
        renoi=boardLista.indexOf("@");
    }
}
for (let i=0; i<moves.length; i++){
    if(moves[i]==="L"){renoi--}
    if(moves[i]==="R"){renoi++}
    if(moves[i]==="U"){renoFila--}
    if(moves[i]==="D"){renoFila++}
    if(renoFila<0 || renoi<0 || renoFila>boardLista.length || renoi>boardLista[0].length){return "crash"}
    if(boardLista[renoFila][renoi]==="#"){return "crash"}
    if(boardLista[renoFila][renoi]==="*"){return "success"}
}
return "fail"

}