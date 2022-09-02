const app = require("../index");
const supertest = require("supertest");
const request = supertest(app);

afterAll(async () => {//cierra la conexión con el servidor al terminar los test
  await app.close();
});

it('Check jest', () => {//test básico para comprobar que el test funciona
  expect(1).toBe(1);
});

it('test GET /hello the test endpoint', async () => {//Test ruta GET /hello
  const response = await request.get("/hello");
  expect(response.body).not.toBe('adios');
  expect(response.body.result).toBe('hello');
  expect(response.status).toBe(200);
  // ...
});

it('test POST /add', async () => { //Test ruta POST /add
  request
    .post('/add')
    .send(//body de la petición POST
      {
        "num1": 1,
        "num2": 2
      }
    )
    .set('Accept', 'application/json')
    .expect(200)

});






