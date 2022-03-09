import react, { useState } from "react";
import CounterContext from "./CounterContext";
import Parent from './Parent'


function App() {
  let[count,setcount] =useState(1);
  return (
    
    <CounterContext.Provider value={{count,setcount}}>
    <div className="App">
     <Parent/>
    </div>
    </CounterContext.Provider>
  );
}

export default App;
