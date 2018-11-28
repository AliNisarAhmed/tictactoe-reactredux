import { TURN, CHECK_GAME_STATUS, RESTART, COMPUTER_TURN } from './actionConstants';
import checkForWin from '../helperFunctions/checkForWin';

const defaultState = {
  cells: {
    1: '', 2: '', 3: '',
    4: '', 5: '', 6: '',
    7: '', 8: '', 9: '',
  },
  frozen: {
    1: false, 2: false, 3: false,
    4: false, 5: false, 6: false,
    7: false, 8: false, 9: false,
  },
  activePlayer: 'X',  // X is human's, O is computer's 
  moves: 0,
  gameStatus: 'statusTurn', // turn, win & draw
  wins: {
    X: 0,
    O: 0
  }
}

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case TURN:
      // Turn: 
      // - updates the cell's display to current active player
      // - freezes the clicked cell
      // - increments the move count

      let cells = { ...state.cells, [action.name]: state.activePlayer };
      let frozen = { ...state.frozen, [action.name]: true };
      let moves = state.moves + 1;
      return {...state, cells, frozen, moves};
    
    case CHECK_GAME_STATUS:
      // Check game status
      // - checks if a player has won, or the game has drawn, else continue the game
  
      if(checkForWin(state.cells)) {
        let gameStatus = 'statusWin';
        // if a player has won, we need to freeze all the cells now
        let frozen = {...state.frozen};
        for (let key of Object.keys(frozen)) {
          frozen[key] = true;
        }
        let wins = { ...state.wins }
        wins[state.activePlayer] += 1;
        return {...state, gameStatus, frozen, wins };  
      } else if (state.moves === 9){
        let gameStatus = 'statusDraw';
        return {...state, gameStatus};
      } else {
        let activePlayer = state.activePlayer === "X"? "O": "X";
        return {...state, activePlayer};
      }
    
    case RESTART: 
      return {
        ...state,
        cells: {
          1: '', 2: '', 3: '',
          4: '', 5: '', 6: '',
          7: '', 8: '', 9: '',
        },
        frozen: {
          1: false, 2: false, 3: false,
          4: false, 5: false, 6: false,
          7: false, 8: false, 9: false,
        },
        activePlayer: 'X',
        moves: 0,
        gameStatus: 'statusTurn',
      };
  
    case COMPUTER_TURN:
      // The gameStatus board will show "Computer Thinking" -> this is already handled by CheckGameStatus function
      // computer will "think" for a second or two
      let currentCells = this.state.cells;
      for (let key of Object.keys(currentCells)) {
        
      }

      // then computer will take its turn
          // this means computer will choose one cell out of remaining and mark it
    
    default:
      return state;
  }
}

export default reducer;