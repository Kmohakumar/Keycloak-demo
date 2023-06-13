import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Service2() {

    const [data , setData] = useState(null)

    useEffect(()=>{
        axios.get("/api/v1")
        .then((res)=>setData(res.data.message))
        .catch((err)=>console.log(err))
    })
  return (
    <div>
      {data}
    </div>
  )
}

export default Service2
