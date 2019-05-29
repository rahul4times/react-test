import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {typing, createTask} from '../redux/actionCreators/boardActionCreator';

export function Board(props){
  return (
    <div>
      <div className='create-task'>
        <input type='text' value={props.text} onChange={e => props.typing(e.target.value)} placeholder='Create task'/>
        <input type='button' value='ADD' onClick={() => props.createTask(props.text)}/>
      </div>
      <div className='row'>
        <div className='stage-one'>
          <h2>Stage 1</h2>
        </div>
        <div className='stage-two'>
          <h2>Stage 2</h2>
        </div>
        <div className='stage-three'>
          <h2>Stage 3</h2>
        </div>
      </div>
    </div>
  );
}

export function mapStateToProps(state){
  return {
    text: state.board.text
  }
}

export function mapDispatchToProps(dispatch){
  return {
    typing: text => dispatch(typing(text)),
    createTask: task => dispatch(createTask(task))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Board);

Board.propTypes = {
  createTask: PropTypes.func,
  typing: PropTypes.func
};
