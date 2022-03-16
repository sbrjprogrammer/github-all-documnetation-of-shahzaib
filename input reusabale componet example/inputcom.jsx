import React from 'react';


function InputCom({tp,plHd,inpVal,onChg}){

    console.log(onChg)
    return(


        <input type={tp} placeholder={plHd} value={inpVal} onChange={(e)=>onChg(e.target.value)}  />
    )
}

export default InputCom;