const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");

const app = express();

// Dando suporte a conexão a http e socket.io
const server = require("http").Server(app);
const io = require("socket.io")(server);

mongoose.connect(
  "mongodb+srv://admin:asd147890@cluster0-sh8z3.mongodb.net/test?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

// Dando acesso a todos os arquivos o socket.io
app.use((req, res, next) => {
  req.io = io;
  next();
});

// Acessa os arquivos estáticos
app.use(
  "/files",
  express.static(path.resolve(__dirname, "..", "uploads", "resized"))
);

// Libera acesso para outros clientes
app.use(cors());

app.use(require("./routes"));

server.listen(3333);
