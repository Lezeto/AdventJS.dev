function canEscape(maze) {
  let s;

  for (let fila = 0; fila < maze.length; fila++) {
    for (let col = 0; col < maze[0].length; col++) {
      if (maze[fila][col] === "S") s = [fila, col];
    }
  }

  let uP = [s];       // últimas posiciones
  let visited = new Set();
  visited.add(s.toString());

  while (uP.length > 0) {
    let uP2 = [];

    for (let i = 0; i < uP.length; i++) {
      let [r, c] = uP[i];

      let moves = [
        [r - 1, c],
        [r + 1, c],
        [r, c - 1],
        [r, c + 1]
      ];

      for (let [nr, nc] of moves) {
        if (
          nr >= 0 &&
          nr < maze.length &&
          nc >= 0 &&
          nc < maze[0].length &&
          maze[nr][nc] !== "#" &&
          !visited.has([nr, nc].toString())
        ) {
          if (maze[nr][nc] === "E") return true;

          visited.add([nr, nc].toString());
          uP2.push([nr, nc]);
        }
      }
    }

    uP = uP2;
  }

  return false;
}
