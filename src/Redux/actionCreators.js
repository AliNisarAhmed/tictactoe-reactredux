import { TURN, CHANGE_GAME_STATUS, CHECK_FOR_WIN, RESTART } from './actionConstants';

export const turnAction = (cellName) => ({
  type: TURN,
  name: cellName
});

export const changeGameStatus = (gameStatus) => ({
  type: CHANGE_GAME_STATUS,
  gameStatus
})

export const checkForWin = () => ({
  type: CHECK_FOR_WIN,
})

export const restart = () => ({
  type: RESTART
});