
//Ordena los juegos de Api
const sortGames = (data) => {
    var gameList = data.map(e => {
        return {
            id: e.id,
            name: e.name,
            released: e.released ? e.released : "Sin fecha",
            rating: e.rating,
            description: e.description ? e.description.replace('<br /> <p> ', '').replace('<p>','').replace('</p>','') : "Sin descripción",
            genre: e.genres.length == 0 ? ["Sin genero"] : e.genres.map(e => e.name),
            platforms: Array.isArray(e.platforms) ? e.platforms.map(e => e.platform.name) : ["Sin información"],
            background_image: e.background_image ? e.background_image : "https://www.nme.com/wp-content/uploads/2020/09/EA-Play-Xbox.jpg"
        }
    })
    return gameList;

}

//Ordena los jeugos de la base de datos     
const sortDb = (list) => {
    const gameList = list.map(e => {
        return {
            id: "db" + e.id,
            name: e.name,
            released: e.releaseDate,
            rating: e.rating,
            description: e.description,
            genre: e.genres.map(a => a.name),
            platforms: e.platforms,
            background_image: "https://cdn2.unrealengine.com/Diesel%2Fblog%2Fepic-games-store-update%2FEGS_Social_Update_News-2560x1440-128a69890d92407b815582c1deba54450e5645f9.jpg"
        }
    })
    return gameList
}




module.exports = {
    sortGames,
    sortDb
}