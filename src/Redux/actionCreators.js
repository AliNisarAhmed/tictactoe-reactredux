import { TURN, CHANGE_GAME_STATUS } from './actionConstants';

export const turnAction = (cellName) => ({
  type: TURN,
  name: cellName
});

export const changeGameStatus = (gameStatus) => ({
  type: CHANGE_GAME_STATUS,
  gameStatus
})