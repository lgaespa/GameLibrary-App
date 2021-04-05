var Sequelize = require("sequelize");
const { Videogame, Genre } = require('../db.js');

module.exports = async (req, res) => {
    try {

        let { name, description, releaseDate, rating, platforms, genres } = req.body;

        var game = await Videogame.create({
            name,
            description, 
            releaseDate: releaseDate ? releaseDate : "Sin fecha",
            rating: rating ? rating : "Sin rating",
            platforms    
        });

        if (!Array.isArray(genres)) {
            genres = [genres];
        }
        const genresDB = await Genre.findAll({
            where: {
                id: {
                    [Sequelize.Op.in]: genres,
                },
            },
        });
        game.setGenres(genresDB)

        res.status(201).json(game)

    } catch (error) {
        console.log(error)
    }
}




