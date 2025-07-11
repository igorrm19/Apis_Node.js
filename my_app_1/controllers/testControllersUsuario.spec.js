//Describe
//To or test
//Expect

describe("Teste de resposta json", () => {
  test("Deve retornar um objeto JSON com status 200", async () => {
    const response = await fetch("http://localhost:3000/");

    expect(response.status).toBe(200);
    
    const data = await response.json();

    expect(data).toEqual(
      expect.objectContaining({
        data: expect.arrayContaining([
          expect.objectContaining({
            id: expect.any(Number),
            nome: expect.any(String),
            idade: expect.any(Number),
          }),
        ]),
        message: expect.any(String),
        timestamp: expect.any(String),
      })
    );

  });
});



