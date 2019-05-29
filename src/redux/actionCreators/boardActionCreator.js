import {TYPING, TASK_CREATED} from '../static/actionTypes';

export function typing(text){
  return dispatch => {
    dispatch({type: TYPING, text});
  }
};

export function createTask(task){
  return dispatch => {
    dispatch({type: TASK_CREATED, task});
  }
}
