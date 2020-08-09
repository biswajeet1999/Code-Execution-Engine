const express = require("express");
const cors = require("cors");
const editorRoutes = require("./routes/editor");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/editor", editorRoutes);

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});
