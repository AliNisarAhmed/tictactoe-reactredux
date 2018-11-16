import winningConditions from './winningConditions'

function checkForWin(cells) {
  for (let wc of winningConditions) {
    let [first, second, third ] = wc;
    
    if (cells[first] && cells[second] && cells[third] && cells[first] === cells[second] && cells[second] === cells[third]) {
      return true;
    }
  }
  return false;
}

export default checkForWin