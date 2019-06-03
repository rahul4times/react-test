import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {createTask, typing} from "../redux/actionCreators/boardActionCreator";

import StageOne from './stageOne';
import StageTwo from './stageTwo';
import StageThree from './stageThree';

export function Board(props){
  return (
    <div>
        <div className='create-task-row'>
            <div className='create-task-one'>
                <input type='text' value={props.text} onChange={e => props.typing(e.target.value)} placeholder='Create task'/>
                <input type='button' value='ADD' onClick={() => props.createTask(props.text, 'stage 1')}/>
            </div>
            <div className='create-task-two'>
                <input type='text' value={props.text} onChange={e => props.typing(e.target.value)} placeholder='Create task'/>
                <input type='button' value='ADD' onClick={() => props.createTask(props.text, 'stage 2')}/>
            </div>
            <div className='create-task-three'>
                <input type='text' value={props.text} onChange={e => props.typing(e.target.value)} placeholder='Create task'/>
                <input type='button' value='ADD' onClick={() => props.createTask(props.text, 'stage 3')}/>
            </div>
        </div>
      <div className='row'>
          <StageOne/>
          <StageTwo/>
          <StageThree/>
      </div>
    </div>
  );
}

export function mapStateToProps(state){
  return {
        text: state.board.text,
        tasks: state.board.tasks
  }
}

export function mapDispatchToProps(dispatch){
    return {
        typing: text => dispatch(typing(text)),
        createTask: (task, category) => dispatch(createTask(task, category))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Board);

Board.propTypes = {
    createTask: PropTypes.func,
    tasks: PropTypes.array,
    typing: PropTypes.func
};

