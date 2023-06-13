import jwtmod from "jsonwebtoken";


export default async (req, res, next) => {
  const PUBLIC_KEY="MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAkopMZiFfnFFtd+vF/qdwkPhS0bhDrHuMnhaNji+/pIjYnt9hr5CXYiA6cXE70X3M1COgiIngO1m0XcaG5XLxW3IOuyu01E9gXJ7gKgrIQ0ro5tMrxGAV4qNQgvvhFkEjPTanqRZuykySJI0aB3howh9HP48HsojNpaGa+T05NlT8NFzfvb92Yp0PdWPg1SGXEDcNQJqm+jIlK5VdRL8Cr2Hm/i9Z1pKXvj+io/YL84SzapeDEoimEqNzdKI15H1WEPAxi48VMbpzelFXOhvuFLdtKfatjUGHlPdCGmJ6MQNhUT999Y92TNOcfUJGL5HXVw8E6TOIoZWBIKya3o242QIDAQAB"

  const bearerHeader = req.headers["authorization"];
  console.log(bearerHeader)
  const token = bearerHeader && bearerHeader.split(" ")[1];
  if (token === null) return res.sendStatus(401);

  const public_key = `-----BEGIN PUBLIC KEY-----\n${PUBLIC_KEY}\n-----END PUBLIC KEY-----`;

  const decodedToken = jwtmod.verify(token, public_key, {
    algorithms: ["RS256"],
  });
  console.log(decodedToken)
  console.log("hello")
  console.log(decodedToken.resource_access?.account?.roles)
  const { realm_access, resource_access } = decodedToken;

  const realmRoles = realm_access?.roles || [];
  const clientRoles = resource_access?.client_id?.roles || [];

  const groups = [...realmRoles, ...clientRoles];
  console.log("Groups")
  console.log(groups);
  const { email } = decodedToken;
  req.user = email;
  next();
};
