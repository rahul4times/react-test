import {TYPING, TASK_CREATED, DROPPED} from '../static/actionTypes';

export function typing(text){
  return dispatch => {
    dispatch({type: TYPING, text});
  }
}

export function createTask(task, category){
  return dispatch => {
    dispatch({type: TASK_CREATED, task, category});
  }
}

export function dropTask(e, column){
  return dispatch => {
    dispatch({type: DROPPED, e, column})
  }
}
