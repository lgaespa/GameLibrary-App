const axios = require('axios').default;
const { sortGames, sortDb } = require('../utils/dataSort');
const { Videogame, Genre } = require('../db.js')
const { Sequelize } = require('sequelize');
const api_key = process.env.API_KEY;


let allGames = [];

//Devuelve como resultaado la busqueda de juegos por parametro, si no hay parametro, retorna todos los juegos
module.exports = async (req, res) => {
    try {
        const { query } = req;

        //si existe una query, devuelve resultados de la busqueda en api y base de datos
        if (query.name !== undefined) {

            gameQuery = []

            var list = await Videogame.findAll({
                where: {
                    name: {
                        [Sequelize.Op.iLike]: `%${query.name}%`,
                    },
                },
                limit: 15,
                include: Genre
            })

            if (list.length !== 0) {
                list = sortDb(list)
                gameQuery.push(...list)
            }

            const response = await axios.get(`https://api.rawg.io/api/games?search=${query.name}&key=${api_key}`);
            const { results } = response.data;

            var apiGames = sortGames(results);
            gameQuery.push(...apiGames)

            apiGames.length < 0 ? res.send('La busqueda no arrojó resultados') : res.json(gameQuery);

        }else if(query.dbgames !== undefined){

            const list = await Videogame.findAll({ limit: 15, include: Genre })
            var b = sortDb(list)
            res.json(b)
        }


        //si no existe, devuelve como resultado todos los juegos db y api
        else {
            
            let list = await Videogame.findAll({ limit: 15, include: Genre })
            var b = sortDb(list)
        
            b.forEach(e => !allGames.some(a => a.id === e.id) && allGames.unshift(e))
            
            if (allGames.length<100){
            const response = await axios.get(`https://api.rawg.io/api/games?key=${api_key}`);
            let { next, results } = response.data
            results = sortGames(results)
            allGames.push(...results)

            var nResponse, aux

            while (allGames.length < 100) {
                nResponse = await axios.get(next)
                aux = sortGames(nResponse.data.results)
                allGames.push(...aux)
                next = nResponse.data.next
                console.log("adentro")
            }
        }

            res.json(allGames);

        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Hubo un error');
    }
}




 // const response = await axios.get(`https://api.rawg.io/api/games`);
            // const data = response.data.results;

            // const list = await Videogame.findAll({ limit: 15, include: Genre })
            // var b = sortDb(list)

            // var a = sortGames(data)
            // b.push(...a)

            // res.json(b);







