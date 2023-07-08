const express = require('express')
const app = express()
const port = 3001
const bodyParser = require('body-parser');
const cors = require('cors');
app.use(cors());

//aplicação pelo método get vai buscar a rota 
// localhost:3001/
// Configura o body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//Arquivo com rotas para o cadastro de livros
const livros = require('./routes/livros');
const autores = require('./routes/autores');

//identificação da rota e da const (require) associada
//localhost:3000/livros
app.use('/livros',livros);
app.use('/autores',autores);
//a rota /livros retorna a lista dos livros cadastrados em formato json
app.use(express.json())

app.get('/autores', (req, res) => {
  const autores = [
    { nome:"Caio", sobrenome: "Baralho", idade: 18, data_nascimento: "2005-04-21", sexo: "M", telefone: "1234567890" }
  ];

  res.json(autores);
})

//exemplo relacionado a filmes localhost:3000/filmes

