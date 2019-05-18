import streams from '../apis/streams';
import { SIGN_IN , SIGN_OUT } from './types';

export const signIn = (userId) => {
  return {
    type : SIGN_IN,
    payload : userId
  };
};

export const signOut = () => {
  return {
    type : SIGN_OUT
  };
};
//arg from redux for ... dispatch from redux thunk
export const createStream = formValues => async dispatch => {
  streams.post('/streams', formValues);
};