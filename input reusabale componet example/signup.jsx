import React, { useState } from 'react';
import InputCom from '../component/Input';



function Signup(){

    let [signup,setSignup]=useState({
        email: "",
        password : ""
    })

    const setField=(value,propName)=>{
        setSignup({...signup,[propName]:value})
    }

    
    return(
        <div>
       <InputCom tp="email" plhd="Enter your email" inpVal={signup.email} onChg={(value)=>setField(value,"email")}/>
        </div>
    )
}

export default Signup