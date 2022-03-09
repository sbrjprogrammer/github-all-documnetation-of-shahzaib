import react,{useContext}from "react";
import counterContext  from "./CounterContext";



function Child(){
 let {count,setcount} = useContext(counterContext)
 
 
    return(

        <div>
            <h2> helllo this is a child element</h2>
            <h2> the counter value is {count}</h2>
            <button onClick={()=>{setcount(count+1)}}></button>
        </div>
    )
}

export default Child;