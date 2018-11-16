import { TURN, CHANGE_GAME_STATUS, CHECK_FOR_WIN, RESTART } from './actionConstants';
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
  activePlayer: 'X',
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
      let cells = Object.assign({}, state.cells, { [action.name]: state.activePlayer });
      let frozen = Object.assign({}, state.frozen, { [action.name]: true });
      let moves = state.moves + 1;
      return {...state, cells, frozen, moves};
    
    case CHANGE_GAME_STATUS:
      return {...state, gameStatus: action.gameStatus } 
    
    case CHECK_FOR_WIN:
      if(checkForWin(state.cells)) {
        let gameStatus = 'statusWin';
        // we need to freeze all the cells now
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
    
    default:
      return state;
  }
}

export default reducer;