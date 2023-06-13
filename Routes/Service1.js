import express from "express";
const router = express.Router();

let data = {
  "mohan@truebeacon.com": [
    "tb",
    "k mohan",
  ],
  "xyz@tb.com": [
    "options rader",
    "investment team"
  ],
};

const service1 = async (req, res) => {
  try {
    const email = req.user;
    
    res.status(200).send({"message":"Service 1"});
  } catch (err) {
    res.status(500).send(err);
  }
};

router.get("/", service1);

export default router;
