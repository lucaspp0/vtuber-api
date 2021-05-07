const express = require('express');
const cors = require('cors');
//iniciando o app
const app = express();
app.use(express.json());
app.use(cors()); // libera acesso para todos domínios. 
const PORT = process.env.PORT || 3000
app.use("/", require("./src/routes"));
app.listen(PORT);
