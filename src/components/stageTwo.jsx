import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {dropTask} from "../redux/actionCreators/boardActionCreator";

export function StageTwo(props){

    function onDragStart(event, category, taskId){
        event.dataTransfer.setData("id", taskId);
    }

    const stageTwo = props.tasks.filter(task => task.category === 'stage 2').map(task => {
        return (
            <div key={task.id} className='task' draggable onDragStart={event => onDragStart(event, task.category, task.id)}>
                <h3>{task.name}</h3>
                {task.category}
            </div>
        );
    });

    return (
        <div className='stage-two' onDragOver={e => e.preventDefault()} onDrop={e => props.dropTask(e, 'stage 2')}>
            <h2>Stage 2</h2>
            {stageTwo}
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

export default connect(mapStateToProps, mapDispatchToProps)(StageTwo);

StageTwo.propTypes = {
    dropTask: PropTypes.func,
    tasks: PropTypes.array
};