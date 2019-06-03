import {TYPING, TASK_CREATED, DROPPED} from '../static/actionTypes';
import randomstring from "randomstring";


export default function boardReducer(state={}, action={}){
  switch(action.type){
    case TYPING: {
      return {...state, text: action.text};
    }
    case TASK_CREATED: {
      const tasks = state.tasks.concat({id: randomstring.generate(), name: action.task, category: action.category});
      return {...state, tasks, text: ''};
    }
    case DROPPED: {
      const column = action.column;
      const taskId = action.e.dataTransfer.getData("id");
      const index = state.tasks.findIndex(task => task.id === taskId);
      const task = {...state.tasks[index], category: column};
      const tasks = state.tasks.filter(task => task.id !== taskId);

      return {...state, tasks: [...tasks, task]};

    }
    default: {
      return state;
    }
  }
}
