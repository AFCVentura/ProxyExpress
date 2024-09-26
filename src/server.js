const express = require("express");
const axios = require("axios");

const app = express();
const port = 3000;

app.get("*", async (req, res) => {
  try {
    const response = await axios.get(`https://www.google.com${req.url}`);
    res.send(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Erro ao processar a requisição");
  }
});

app.listen(port, () => {
  console.log(`Servidor proxy rodando na porta ${port}`);
});
