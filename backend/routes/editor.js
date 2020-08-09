const router = require("express").Router();
const handlePython = require("../controllers/handlePython");
const handleJavaScript = require("../controllers/handleJavaScript");

router.post("/", (req, res) => {
  switch (req.body.mode) {
    case "python":
      handlePython(req.body.code, res);
      break;
    case "javascript":
      console.log("js");

      handleJavaScript(req.body.code, res);
      break;
    default:
      res.json({ err: "Select valid language" });
  }
});

module.exports = router;
