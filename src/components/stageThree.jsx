import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {dropTask} from "../redux/actionCreators/boardActionCreator";

export function StageThree(props){

    function onDragStart(event, category, taskId){
        event.dataTransfer.setData("id", taskId);
    }

    const stageThree = props.tasks.filter(task => task.category === 'stage 3').map(task => {
        return (
            <div key={task.id} className='task' draggable onDragStart={event => onDragStart(event, task.category, task.id)}>
                <h3>{task.name}</h3>
                {task.category}
            </div>
        );
    });

    return (
        <div className='stage-three' onDragOver={e => e.preventDefault()} onDrop={e => props.dropTask(e, 'stage 3')}>
            <h2>Stage 3</h2>
            {stageThree}
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

export default connect(mapStateToProps, mapDispatchToProps)(StageThree);

StageThree.propTypes = {
    dropTask: PropTypes.func,
    tasks: PropTypes.array
};