import { TURN, CHANGE_GAME_STATUS } from './actionConstants'

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
  gameStatus: 'statusTurn' // turn, win & draw
}

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case TURN:
      let cells = Object.assign({}, state.cells, { [action.name]: state.activePlayer });
      let frozen = Object.assign({}, state.frozen, { [action.name]: true });
      let moves = state.moves + 1;
      let gameStatus = 'statusTurn';
      if (moves === 9) {
        gameStatus = 'statusDraw'
      }
      let activePlayer = state.activePlayer === "X"? "O": "X";
      // let gameStatus = 'turn';
      // if (state.moves === 9) {
      //   gameStatus = 'draw';
      // }
      return Object.assign({}, state, {cells}, {moves}, {activePlayer}, {frozen}, {gameStatus});
    case CHANGE_GAME_STATUS: 
      return Object.assign({}, state, { gameStatus: action.gameStatus });
    default:
      return state;
  }
}

export default reducer;