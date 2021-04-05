const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const getGenres = require("./getGenres")
const getGames = require("./getGames");
const getGameId = require("./getGameId");
const postGame = require("./postGame")

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
//defino metodos

router.get("/", (req, res) => {
    res.send("Principal")
})


router.get("/genres", getGenres)
router.get("/videogames", getGames)
router.get("/videogame/:id", getGameId)
router.post("/videogame", postGame)


router.get("*", function (req, res) {
    res.status(404).send("404 Pagina no encontrada")
})


module.exports = router;
