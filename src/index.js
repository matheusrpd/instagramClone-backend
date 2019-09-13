const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");

const app = express();

mongoose.connect(
  "mongodb+srv://admin:asd147890@cluster0-sh8z3.mongodb.net/test?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

// Acessa os arquivos estáticos
app.use(
  "/files",
  express.static(path.resolve(__dirname, "..", "uploads", "resized"))
);

// Libera acesso para outros clientes
app.use(cors());

app.use(require("./routes"));

app.listen(3333);
