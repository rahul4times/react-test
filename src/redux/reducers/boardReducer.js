import {TYPING, TASK_CREATED} from '../static/actionTypes';

export default function boardReducer(state={}, action={}){
  switch(action.type){
    case TYPING: {
      return {...state, text: action.text};
    }
    case TASK_CREATED: {
      const stageOne = state.tasks.stageOne.concat(action.task);
      const tasks = {...state.tasks, stageOne};
      return {...state, tasks, text: ''};
    }
    default: {
      return state;
    }
  }
}
