
import streams from '../apis/streams';
import history from '../history';

import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_STREAM, 
  FETCH_STREAM,
  FETCH_STREAMS,
  EDIT_STREAM,
  DELETE_STREAM,
} from './types';



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
//browser router of react send history as prop to comp we have it
export const createStream = (formValues) => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const response = await streams.post('/streams', { ...formValues, userId });
  dispatch({ type: CREATE_STREAM , payload: response.data });
  history.push('/');
  //programmatic nav to send user back to app. our history browser router
  //there fore we make history by ourself there fore we can mutate
  //make history file > use plain Router
};

export const fetchStreams = () => async dispatch => {
  const response = await streams.get('/streams');
  dispatch({ type: FETCH_STREAMS , payload: response.data });
};

export const fetchStream = id => async dispatch => {
  const response = await streams.get(`/streams/${id}`);
  dispatch({ type: FETCH_STREAM , payload: response.data });
};

export const editStream = (id , formValues) => async dispatch => {
  const response = await streams.patch(`/streams/${id}`, formValues);
  dispatch({ type: EDIT_STREAM , payload: response.data });
  history.push('/');
};

export const deleteStreams = id => async dispatch => {
  await streams.delete(`/streams/${id}`);
  dispatch({ type: DELETE_STREAM , payload: id });
};