import express from "express";

import documents from "./Routes/documents.js";
import authenticate from "./Routes/authenticate.js";
import service1 from "../keycloakdemo1/Routes/Service1.js";

(async function () {
  

  const PORT  = 7000;
  const app = express();
  const server = app.listen(PORT, () =>
    console.log(`Backend started on port ${PORT}`)
  );

  app.use("/documents", authenticate, documents);
  app.use("/service1", authenticate, service1);
  // app.use("/documents", authenticate, documents);
})();
