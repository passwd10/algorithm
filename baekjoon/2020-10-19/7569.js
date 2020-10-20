const solution = (m, n, h, boxs) => {
  const temp = new Array(h).fill([]);

  if (h !== 1) {
    for (let i = 0; i < boxs.length; i++) {
      temp[Math.floor(i / n)] = [...temp[Math.floor(i / n)], boxs[i]]
    }
    boxs = temp;  
  }
  const dx = [1, -1, 0, 0, 0, 0]
  const dy = [0, 0, 1, -1, 0, 0]
  const dz = [0, 0, 0, 0, 1, -1]

  let visited = [];
  const queue = [];

  for (let i = 0; i < h; i++) {
    const tempArr = []
    for (let j = 0; j < n; j++) {
      tempArr.push(new Array(m).fill(0))
    }
    visited.push(tempArr)
  }

  const bfs = (queue) => {
    while (queue.length > 0) {
      const [x, y, z] = queue.shift();
      for (let i = 0; i < 6; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];
        const nz = z + dz[i];

        if (0 <= nx && nx < h && 0 <= ny && ny < n && 0 <= nz && nz < m) {
          if (boxs[nx][ny][nz] === 0 && visited[nx][ny][nz] === 0) {
            queue.push([nx, ny, nz]);
            boxs[nx][ny][nz] = 1;
            visited[nx][ny][nz] = visited[x][y][z] + 1;
          }
        }
      }
    }
  }

  for (let i = 0; i < h; i++) {
    for (let j = 0; j < n; j++) {
      for (let l = 0; l < m; l++) {
        if (boxs[i][j][l] === 1 && visited[i][j][l] === 0) {
          queue.push([i, j, l])
          visited[i][j][l] = 1;
        }
      }
    }
  }

  bfs(queue);

  let answer = 0;

  for (let i = 0; i < h; i++) {
    for (let j = 0; j < n; j++) {
      for (let l = 0; l < m; l++) {
        if (answer < visited[i][j][l]) {
          answer = visited[i][j][l];
        }
      }
    }
  }

  for (let i = 0; i < h; i++) {
    for (let j = 0; j < n; j++) {
      for (let l = 0; l < m; l++) {
        if (boxs[i][j][l] === 0 && visited[i][j][l] === 0) {
          answer -= 1;
        }
      }
    }
  }
  console.log(answer - 1)
}

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let m;
let n;
let h;
const boxs = [];

for (let i = 0; i < input.length - 1; i++) {
  if (i === 0) {
    [m, n, h] = input[i].split(' ');
  } else {
    boxs.push(input[i].split(' ').map(v => Number(v)))
  }
}

solution(Number(m), Number(n), Number(h), boxs)

// test('solution', () => {
  // expect(solution(5, 3, 1, [[0, -1, 0, 0, 0], [-1, -1, 0, 1, 1], [0, 0, 0, 1, 1]])).toBe(-1);
//   expect(solution(5, 3, 2, [[[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]], [[0, 0, 0, 0, 0], [0, 0, 1, 0, 0], [0, 0, 0, 0, 0]]])).toBe(4)
// });

