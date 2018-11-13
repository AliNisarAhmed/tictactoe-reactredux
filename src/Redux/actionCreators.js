import { TURN } from './actionConstants';

export const turnAction = (cell) => ({
  type: TURN,
  cell
});