// program1.js
function describe(grid) {
  if (grid == null || grid.length === 0) {
    return 0;
  }

  let numIslands = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (grid[i][j] === 'L') {
        numIslands++;
        dfs(grid, i, j);
      }
    }
  }

  return numIslands;
}

function dfs(grid, i, j) {
  if (i < 0 || j < 0 || i >= grid.length || j >= grid[i].length || grid[i][j] === 'W') {
    return;
  }

  // Mark the cell as water to indicate it's been visited
  grid[i][j] = 'W';

  // Recursively visit all connected land cells
  dfs(grid, i + 1, j);
  dfs(grid, i - 1, j);
  dfs(grid, i, j + 1);
  dfs(grid, i, j - 1);
}

module.exports = describe;