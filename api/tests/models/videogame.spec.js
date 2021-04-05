const { Videogame, conn } = require('../../src/db.js');

describe('Videogame model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));


  describe('Validators', () => {
    beforeEach(() => Videogame.sync({ force: true }));
    
    describe('Required data', () => {

      it('should throw an error if name is missing', (done) => {
        Videogame.create({
          description: "Racing Simulator",
          platform: ["PC"]
        })
          .then(() => done(new Error('name is missing')))
          .catch(() => done());
      });

      it('should throw an error if description is missing', (done) => {
        Videogame.create({           
          name: 'FarCry 6',
          platform: ["Xbox","PC"]
        })
          .then(() => done("description is missing"))
          .catch(() => done());
      });

      it('should throw an error if name is missing', (done) => {
        Videogame.create({
          description: "Racing game simulator",
          platform: ["Xbox","PlayStation"]
        })
          .then(() => done("name is missing"))
          .catch(() => done());
      });

      it('should throw an error if platform is missing', (done) => {
        Videogame.create({ 
          name: 'Dead Red Redemption 2',
          description: "Western game"
        })
          .then(() => done("platform is missing"))
          .catch(() => done());
      });

      it('should throw an error if genre is not an Array', (done) => {
        Videogame.create({
          name: 'FIFA 21',
          description: "Soccer Simulator",
          platform: ["PC"],
          genre: "Sports"
        })
          .then(() => done("Genre must be an Array"))
          .catch(() => done());
      });
    });
  });
});