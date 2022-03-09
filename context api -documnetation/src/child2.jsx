import React,{useReducer} from "react";
import counterReducer  from "./counterReducer";




const Child2=()=>{

    let [state,dispatch]=useReducer(counterReducer,1)
return(
    <div>
        <h2>the value of reducer is {state}</h2>
        <button onClick={()=>{dispatch('INCREMENT')}}>Increament</button>
        <button onClick={()=>{dispatch('DECREMENT')}}>decreament</button>
    </div>
)
}

export default Child2