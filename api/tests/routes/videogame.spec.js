const session = require('supertest-session');
const app = require('../../src/app.js');
const { Videogame, conn } = require('../../src/db.js');

const agent = session(app);
const videogame = {
  name: 'Super Mario Bros',
  description: "Save the princess",
  platforms: ["Nintendo"]
};

describe('Videogame routes', () => {
  before(() => conn.authenticate().catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Videogame.sync({ force: true }));

  describe('GET /videogames', () => {
    it('should get 200', () =>
      agent.get('/videogames').expect(200)
    ).timeout(0);

    it('should get 200 if there is a query', () =>
      agent.get('/videogames?name=gta').expect(200)
    ).timeout(0);
  });

  describe('GET /videogame/:id', () => {
    it('should get 200 if there is an ID', () =>
      agent.get('/videogame/100')
        .expect(200)
    ).timeout(0);
  });

  describe('POST /videogame', () => {
    it('should get 200', () =>
      agent.post('/videogame')
        .send(videogame)
        .expect(201)
    ).timeout(0);
  });
});