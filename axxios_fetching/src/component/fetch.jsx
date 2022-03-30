import axios from 'axios'
import React, { useEffect, useState } from 'react'

export function Fetch() {
    let [posts,setposts]= useState([])

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((res)=>{
            console.log(res)
            setposts(res.data)
        }).catch((err)=>{
                console.log(err)
        })

    },[])

    return (
        <>
          <ul>
              {
                  posts.map((post)=>{
                      return <li key={post.id}>{post.title}</li>

                  })
              }
              </ul> 
        </>
    )
}
