function checkForWin(cells) {

  const winningConditions = [
    [1, 2, 3], [4, 5, 6], [7, 8, 9],
    [1, 4, 7], [2, 5, 8], [3, 6, 9],
    [1, 5, 9], [3, 5, 7]
  ]

  for (let wc of winningConditions) {
    let [first, second, third ] = wc;
    
    if (cells[first] && cells[second] && cells[third] && cells[first] === cells[second] && cells[second] === cells[third]) {
      return true;
    }
  }
  return false;
}

export default checkForWin