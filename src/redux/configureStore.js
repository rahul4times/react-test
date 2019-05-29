import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import thunk from 'redux-thunk';
import boardReducer from './reducers/boardReducer';

export default function configureStore(initialState){

  const reducers = combineReducers({
    board: boardReducer
  });
  const storeEnhancer = applyMiddleware(thunk);
  return createStore(reducers, initialState,compose(
      storeEnhancer,
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );
};
