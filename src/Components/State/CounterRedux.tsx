import  { useReducer } from 'react'

const initialState = {count : 0};

type stateProps = {
    count : number
}

type actionChange = {
    type: 'increment' | 'decrement'
    payload: number
}

type actionReset = {
    type: 'reset'
}

type actionProps = actionChange | actionReset


function reducers (state:stateProps, action:actionProps)
{
    switch(action.type){
        case 'increment':
            return {count : state.count + action.payload}
        case 'decrement':
            return {count: state.count - action.payload}    
        case 'reset':
            return initialState;
        default:
            return state;
    }
 
}


const Counter = () => {
    const [state, action] = useReducer(reducers,initialState);
  return (
    <div>
      Count : {state.count}
      <button onClick={ () => action({type:'increment', payload:10})}>Increase by 10</button>
      <button onClick= { () => action({type:'decrement', payload:10}) }>Decrease by 10</button>
      <button onClick= { () => action({type:'reset'}) }>Decrease by 10</button>
    </div>
  )
}

export default Counter





















// import { useReducer } from "react";

// const initialState = {count : 0}

// type CounterState = {
//     count : number
// }

// type CounterAction ={
//     type:string
//     payload: number
// }

// function reducer(state:CounterState,action:CounterAction){
//     switch(action.type){
//         case 'increment':
//             return {count : state.count + action.payload}
//         case 'decrement':
//             return {count : state.count - action.payload}
//         default:
//             return state;
//     }
// }
// const Counter = () => {
//   const [state, dispatch] = useReducer(reducer,initialState)
// return(
//     <>
//     Count : {state.count}
//     <button onClick={() => dispatch({type:'increment', payload:10})}>Increase by 10</button>
//     <button onClick ={() => dispatch({type:'decrement', payload:10})} >Decrease by 10</button>
//     </>
// )

// }

// export default Counter
