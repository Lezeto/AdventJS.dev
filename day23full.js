function minStepsToDeliver(map) {
  const rows = map.length;
  const cols = map[0].length;

  let start;
  let gifts = [];

  // 1️⃣ Buscar S y todas las G
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (map[r][c] === 'S') start = [r, c];
      if (map[r][c] === 'G') gifts.push([r, c]);
    }
  }

  // Si no hay regalos
  if (gifts.length === 0) return 0;

  // 2️⃣ BFS desde S
  const distances = Array.from({ length: rows }, () =>
    Array(cols).fill(-1)
  );

  const queue = [start];
  distances[start[0]][start[1]] = 0;

  const directions = [
    [1, 0], [-1, 0],
    [0, 1], [0, -1]
  ];

  while (queue.length > 0) {
    const [r, c] = queue.shift();

    for (const [dr, dc] of directions) {
      const nr = r + dr;
      const nc = c + dc;

      if (
        nr >= 0 && nr < rows &&
        nc >= 0 && nc < cols &&
        map[nr][nc] !== '#' &&
        distances[nr][nc] === -1
      ) {
        distances[nr][nc] = distances[r][c] + 1;
        queue.push([nr, nc]);
      }
    }
  }

  // 3️⃣ Sumar distancias a cada G
  let totalSteps = 0;

  for (const [r, c] of gifts) {
    if (distances[r][c] === -1) return -1;
    totalSteps += distances[r][c];
  }

  return totalSteps;
}
