const app = require("./index");
const supertest = require("supertest");
const request = supertest(app);

/* afterAll( async () => {
  await app.close()
  //await mongoose.connection.close()
}) */

afterAll(done => {
  done();
});


it('Check jest', () => {
  expect(1).toBe(1);
});


/* it("test GET /hello the test endpoint", async done => {
  const response = await request.get("/hello");
  expect('Content-Type', /json/);
  //expect(response.body.result).toBe('hello');
  //expect(response.status).toBe(200);
  // ...
}); */







