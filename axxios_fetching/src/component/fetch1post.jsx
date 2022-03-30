import axios from 'axios'
import React, { useEffect, useState } from 'react'

export function Fetch1post() {
    let[post,setpost]=useState([])
    let[id,setid]= useState(1)
    let[idclick,setidclick]= useState(1)

    const handler=()=>{
        setidclick(id)
    }

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idclick}`)
        .then((res)=>{
            setpost(res.data)
        }).catch((err)=>{
            console.log(err)
        })
    },[idclick])
    

    return (
        <>
         <input type="text"  value={id} onChange={(e)=>{setid(e.target.value)}} /> <br />
         <button onClick={handler}>Fetch post</button>

            <h2> {post.title} </h2>
          
        </>
    )
}
