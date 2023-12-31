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

const getDocuments = async (req, res) => {
  try {
    const email = req.user;

    res.status(200).send(data[email]);
  } catch (err) {
    res.status(500).send(err);
  }
};

router.get("/", getDocuments);

export default router;
