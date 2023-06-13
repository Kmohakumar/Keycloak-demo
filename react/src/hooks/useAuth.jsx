import React, { useState, useEffect, useRef } from "react";
import Keycloak from "keycloak-js";

var client = new Keycloak({
  "url": "http://localhost:4000/",
  "realm": "myrealm",
  "clientId": "client1",
  "enable-cors" : true,
 
});

const useAuth = () => {
  var isRun = useRef(false);
  const [token, setToken] = useState(null);
  const [isLogin, setLogin] = useState(false);

  useEffect(() => {
    if (isRun.current) return;
    console.log(client)
    isRun.current = true;
    client
      .init({
        onLoad: 'login-required',
      })
      .then((res) => {
        setLogin(res);
        setToken(client.token);
        console.log("passed")
      }).catch(function(error){
        alert("auth failed")
        console.log(error)
      })
        //
        // keycloak.logout('http://auth-server/auth/realms/myrealm/protocol/openid-connect/logout?redirect_uri=encodedRedirectUri')
        //alert("Logged Out");
    
  }, []);

  return [isLogin,token];
};

export default useAuth;
