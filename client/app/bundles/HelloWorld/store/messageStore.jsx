import { createStore } from 'redux';
import messageReducer from '../reducers/messageReducer';

const configureStore = (railsProps) => (
  createStore(messageReducer, railsProps)
);

export default configureStore;
