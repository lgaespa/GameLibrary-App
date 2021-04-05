const axios = require('axios').default;
const { Videogame, Genre } = require('../db.js');
const {sortDb, sortGames} = require('../utils/dataSort')
const api_key = process.env.API_KEY;


module.exports = async (req, res) => {

  let id = req.params.id;

  try {
//Busca en la base de datos, ya que el id contiene "db"
    if (id.includes("db")) {

      id = id.replace("db", "")
      let gameResponse = await Videogame.findByPk(parseInt(id), ({ include: Genre }));

      if (gameResponse == null) {
        res.status(404).send("La busqueda no arrojó resultados")
      }

      var gameData = await sortDb([gameResponse])
      res.json(gameData)

    } else {
      
//si no contiene db, busca en la api
      const response = await axios.get(`https://api.rawg.io/api/games/${id}?key=${api_key}`);
      const data = response.data;

      var game = sortGames([data])
      res.json(game)
    }
  } catch (error) {
    res.status(404).send("La busqueda no arrojó resultados")
    console.log(error)
  }
}

