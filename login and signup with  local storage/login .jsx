import React from "react";
import {useState} from "react";
import Input from "../component/input";
import Button from "../component/button";
import { connect } from "react-redux";
import {useHistory} from 'react-router-dom'


const LoginCom = (prop) => {

    const history = useHistory()

    const [data,setData] = useState("");

    const [login,setLogin] = useState({
        email:"",
        password:""
    });

    const setField = (val,propName) => {
        setLogin({...login,[propName]: val})
    }

    const updateFunc = () =>{
      
    }

   
    
    const loginFunc = () => {
        let oldData = localStorage.getItem("userData");
        let flagUser = false;
        if (oldData == null) {
            // oldData = [];
            // oldData.push(signUp);
            // localStorage.setItem("userData", JSON.stringify(oldData));
            alert("No user is registered")

        }
        else {
            let oldArr = JSON.parse(oldData);
            for (var i = 0; i < oldArr.length; i++) {
                if (login.email === oldArr[i].email && login.password === oldArr[i].password) {
                    // prop.dispatch({type:"LOGIN_USER_DATA",payload:oldArr[i]})
                    // setData(oldArr[i].email);
                    localStorage.setItem("loginUser", JSON.stringify(oldArr[i]));
                    history.push('/home',{userDatasss:"hammad"})
        


                    flagUser = true;
                }    
            }
            if (!flagUser) {
                console.log("Email or password is incorrect")
            }




        }
        
       
    }

    return(
        <>
        <h1>Login</h1>
        <Input
        tp={"email"}
        plHd={"Enter Your Email"}
        inpVal={login.email}
        onChg={(val)=>setField(val,"email")}
        />
         <Input
        tp={"password"}
        plHd={"Enter Your Password"}
        inpVal={login.password}
        onChg={(val)=>setField(val,"password")}
        />
        <Button
        btnFunc={loginFunc}
        btnText={"login"}
        />
        <p>{data}</p>
        
        </>
    )


}


export default newApp;