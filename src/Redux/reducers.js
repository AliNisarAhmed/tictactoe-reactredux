import { TURN } from './actionConstants'

const defaultState = {
  cells: [
    {1: ''}, {2: ''}, {3: ''},
    {4: ''}, {5: ''}, {6: ''},
    {7: ''}, {8: ''}, {9: ''},
  ],
  activePlayer: 'X',
  moves: 0
}

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case TURN:
      let cells = state.cells.map(cell => {
        if (Object.keys(cell)[0] === action.cell) {
          cell[action.cell] = state.activePlayer;
        }
        return cell;
      });
      return {...state, cells};
    default:
      return state;
  }
}

export default reducer;