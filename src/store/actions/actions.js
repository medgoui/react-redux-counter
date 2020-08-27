export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';


export const saveIncrement = () => {
    return {
        type: INCREMENT
    }
}
export const increment = () => {
    return dispatch => {
        setTimeout(() => {
            dispatch(saveIncrement());
        }, 2000)
    }
}

export const decrement = () => {
    return {
        type: DECREMENT
    }
}