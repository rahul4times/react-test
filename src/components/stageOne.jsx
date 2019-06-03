import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {dropTask} from '../redux/actionCreators/boardActionCreator';

export function StageOne(props){

    function onDragStart(event, category, taskId){
        event.dataTransfer.setData("id", taskId);
    }

    const stageOne = props.tasks.filter(task => task.category === 'stage 1').map(task => {
        return (
            <div key={task.id} className='task' draggable onDragStart={event => onDragStart(event, task.category, task.id)}>
                <h3>{task.name}</h3>
                {task.category}
            </div>
        );
    });

    return (
        <div className='stage-one' onDragOver={e => e.preventDefault()} onDrop={e => props.dropTask(e, 'stage 1')}>
            <h2>Stage 1</h2>
            {stageOne}
        </div>
    );
}

export function mapStateToProps(state){
    return {
        tasks: state.board.tasks
    }
}

export function mapDispatchToProps(dispatch){
    return {
        dropTask: (e, column) => dispatch(dropTask(e, column))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StageOne);

StageOne.propTypes = {
    dropTask: PropTypes.func,
    tasks: PropTypes.array
};