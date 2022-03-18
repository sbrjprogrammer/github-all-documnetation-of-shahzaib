
import React, { useEffect, useState } from "react";


function useEffext(){
    let[state1,setstate1]=useState(0);
    let[state2,setstate2]=useState(0);


useEffect(()=>{
    alert("run")
})
// is tarha likh h to har render par bar bar chalega
useEffect(()=>{
    alert("run")
},[])
// is tarha likha h to first time refrsh ya render hone par chalega
useEffect(()=>{
    alert("run")
},[state1])
// is tarha likha h to srf state1 k update hone par chalega
    return <div>
        useefectb  documentation
    </div>
}


