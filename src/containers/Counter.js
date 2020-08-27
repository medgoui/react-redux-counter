import React from 'react';
import './Counter.css';
import * as actionTypes from '../store/actions/actions';
import { connect } from 'react-redux';

const Counter = props => {

    return (
        <div>
            <div className="card">
                <h1>{props.ctr}</h1>
            </div>
            <div>
                <button className="plus" onClick={props.onIncrement}>+</button>
                <button className="minus" onClick={props.onDecrement}>-</button>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        ctr: state.counter
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIncrement: () => dispatch(actionTypes.increment()),
        onDecrement: () => dispatch(actionTypes.decrement())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
