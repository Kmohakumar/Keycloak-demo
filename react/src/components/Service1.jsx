import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Service1({token}) {

    const [data , setData] = useState(null)

    const config = {
        headers: {
          authorization: `Bearer ${token}`,
        },
      };

    useEffect(()=>{
        axios.get("/service1", config)
        .then((res)=>setData(res.data.message))
        .catch((err)=>console.log(err))
    })
  return (
    <div>
      {data}
    </div>
  )
}

export default Service1