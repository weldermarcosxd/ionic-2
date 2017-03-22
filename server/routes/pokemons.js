const constants = require('../constants.js');

module.exports = function(app) {

    app.get('/pokemons/:limit?/:offset?/:order?/:id?/:search?', (req, res) => {
        console.log("Getting pokemons list...");
        var query = {};
        query.limit = req.query.limit ? parseInt(req.query.limit, 10) : 10;
        query.offset = req.query.offset ? parseInt(req.query.offset, 10) : 0;
        query.order = req.query.order ? req.query.order : "_id";
        query.id = req.query.id ? parseInt(req.query.id, 10) : null;
        query.search = req.query.search ? req.query.search.toString() + "%" : null;

        var connection = app.persistence.connectionFactory(constants.ENV);
        var pokemonDao = new app.persistence.PokemonDao(connection);

        if (!query.id && !query.search) {
            pokemonDao.findList(query, (err, result) => {
                if (err) {
                    console.log("Não foi possível recuperar a lista de pokemons: " + err);
                    res.status(500).send("Erro na listagem dos pokemons: " + err);
                } else {
                    console.log("Pokemon list retrived");
                    res.status(200).send(result);
                }
            });
        } else if(null != query.id){
            pokemonDao.findById(query.id, (err, result) => {
                if (err) {
                    console.log("Não foi possível recuperar o pokemon: " + err);
                    res.status(500).send("Erro na busca do pokemon: " + err);
                } else {
                    console.log("pokemon recuperado com sucesso!");
                    res.status(200).send(result);
                }
            });
        } else {
          pokemonDao.search(query.search, (err, result) => {
              if (err) {
                  console.log("Não foi possível recuperar os pokemons: " + err);
                  res.status(500).send("Erro na busca dos pokemons: " + err);
              } else {
                  console.log("Pokemons recuperado com sucesso!");
                  res.status(200).send(result);
              }
          });
        }
    });

    app.get('/pokemons/pokemon/:id', (req, res) => {
        var id = req.params.id;
        console.log("Buscando pokemon...");

        var connection = app.persistence.connectionFactory(constants.ENV);
        var pokemonDao = new app.persistence.pokemonDao(connection);


    });
}
