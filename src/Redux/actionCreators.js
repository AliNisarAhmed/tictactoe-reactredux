import { TURN, CHECK_GAME_STATUS, RESTART, COMPUTER_TURN } from './actionConstants';

export const turnAction = (cellName) => ({
  type: TURN,
  name: cellName
});

export const checkGameStatus = () => ({
  type: CHECK_GAME_STATUS,
})

export const restart = () => ({
  type: RESTART
});

export const computerTurn = () => ({
  type: COMPUTER_TURN
});