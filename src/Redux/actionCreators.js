import { TURN, CHECK_GAME_STATUS, RESTART } from './actionConstants';

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