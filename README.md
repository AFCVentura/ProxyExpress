João Vitor Ventura

Instruções:
Olá nesta atividade você deverá identificar o seguinte:

O que é o Express e suas principais funcionalidades.

R: O framework de JS para back-end.

Diferença entre Node.js puro e o uso de Express.

R: NodeJS é a ferramenta para poder executar JS fora do navegador e express é o framework para criar aplicações back-end com JS.

Como criar rotas básicas com Express.

R: inicializamos a variável app e, passando o verbo HTTP como método dessa variável, colocamos nele a rota da URL e também uma função com parâmetros request e response para definir o que ela deve retornar. Exemplo:
Para responder com "Hello World!" na página inicial, pode-se utilizar o código:
 app.get('/', function (req, res) { res.send('Hello World! '); });

Conceitos de middlewares no Express.

R: É a maneira de fazer algum código ser executado antes do processamento da requisição feita.

O que é um proxy e como ele pode ser implementado com Express.

R: Um servidor que funciona como intermediário entre dois sistemas.


Para isso desenvolva um relatório com as informações identificadas e também gere um exemplo prático de um proxy em React.

R:
Nesse exemplo estou importando o express e o axios (para requisições). Inicializo a variável app que será o servidor express em si e defino que quando qualquer requisição get é feita (rota *), vou fazer uma requisição do tipo get para o google passando como parâmetro a busca feita na requisição, depois o proxy retorna exatamente o response da requisição que ele fez ao google, agindo como intermédio. No final do código definimos que a porta vai ser a 3000 e que vai ser impressa uma mensagem no console enquanto ele executa.

~~~js
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
~~~