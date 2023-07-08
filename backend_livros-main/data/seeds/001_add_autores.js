exports.seed = function (knex){
    return knex("autores").del()
    .then(function() {
        return knex("autores").insert([
            {
                nome:"Caio", sobrenome: "Baralho", idade: 18, data_nascimento: "2005-04-21", sexo: "M", telefone: "1234567890"}
            
  
        ]);
    });
  }
  
  