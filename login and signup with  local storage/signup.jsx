import React, { useState } from 'react';
import InputCom from '../component/Input';
import ButtonCom from '../component/button';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';



function SignupCom(){

    let [signup,setSignup]=useState({
        email: "",
        password : ""
    })

    let history = useHistory()

    const setField=(value,propName)=>{
        setSignup({...signup,[propName]:value})
    }

    const signUpFunc =()=>{
        let oldData = localStorage.getItem("userData")
        let flag = false

        if(oldData==null){
            oldData= []
            let userData = {...signup}
            userData.uid = Math.floor(Math.random()*1000) 
            oldData.push(userData)
            localStorage.setItem("userData",JSON.stringify(oldData))
            history.push('/')
            console.log("user is register")
        }else{
            let oldArray =JSON.parse(oldData)
            for(var i= 0; i<oldArray.length; i++){
                if(signup.email===oldArray[i].email){
                    alert("user already exist")
                    flag = true;
                }
                


            }
            if(!flag){
                oldArray= []
                let userData={...signup}
                userData.uid= Math.floor(Math.random()*1000)
                oldArray.push(userData)
                localStorage.setItem("userData" ,JSON.stringify(oldArray))
                history.push('./')
                alert("user register succesfully")
            }
        }
       
    }



    
    return(
        <div>
       <InputCom tp="email" plhd="Enter your email" inpVal={signup.email} onChg={(value)=>setField(value,"email")}/>
       <InputCom tp="password" plhd="Enter your email" inpVal={signup.password} onChg={(value)=>setField(value,"password")}/>
       <ButtonCom btnfunc={signUpFunc} btntext="Signup"/>


        </div>
    )
}

export default SignupCom