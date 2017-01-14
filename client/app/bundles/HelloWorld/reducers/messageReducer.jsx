import { combineReducers } from 'redux';

const text = (state = '', action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const messageReducer = combineReducers({ text });

export default messageReducer;
