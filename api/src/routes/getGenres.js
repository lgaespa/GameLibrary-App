const { Genre } = require('../db.js');

module.exports = async function (req, res) {
    try {
    const list = await Genre.findAll();

    const genreList = list.map(e => {
        return {
            id: e.id,
            name: e.name,
            image: e.image,
        }
    })   
    
    res.json(genreList);
      
    } catch (error) {
      console.log(error)
    }
  }
  