import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Service2 from "./Service2";
import Service1 from "./Service1";


const Protected = ({ token }) => {
  const isRun = useRef(false);

  const [data, setData] = useState(null);

  useEffect(() => {
    if (isRun.current) return;

    isRun.current = true;

    const config = {
      headers: {
        authorization: `Bearer ${token}`,
      },
    };
    axios
      .get("/documents", config)
      .then((res) => {
        console.log(res.data)
        setData(res.data)})
      .catch((err) => console.error({ "error": err }));
  }, []);

  return data ? (
    <>
      {data.map((rec, i) => (
        <h3 key={i}>{rec}</h3>
      ))}
      <Service1 token={token}/>
    </>
  ) : (
    <div>
    <div>Protected route</div>
    <Service2/>
    
    </div>
  );
};

export default Protected;
