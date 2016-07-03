import { createStore, applyMiddleware } from 'redux';
import thunkMiddleWare from 'redux-thunk';
import rootReducer from '../reducers';

const configureStore = () => {
  const store = createStore(
    rootReducer,
    applyMiddleware(
      thunkMiddleWare
    )
  );

  return store;
};

export default configureStore;
