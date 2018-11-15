import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers';
import { createLogger } from 'redux-logger';

const logger = createLogger();

// const myMiddleWare = store => next => action => {
//   let state = store.getState();
//   console.log('initial state: ', state);
//   console.log("next: ", next);
//   console.log("action: ", action);
//   let result = next(action);
//   console.log('next state', store.getState());
//   console.log('result: ', result)
//   return result;
// }

const store = createStore(reducer, applyMiddleware(logger));

// const unsubscribe = store.subscribe(() => {
//   console.log('state :', store.getState());
// })

export default store;
