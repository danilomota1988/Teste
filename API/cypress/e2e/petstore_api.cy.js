describe('Petstore API Tests', () => {
  it('Retorno de um pet existente (GET /pet/{petId})', () => {
    cy.api({
      method: 'GET',
      url: '/pet/1',
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.headers['content-type']).to.include('application/json');
      expect(response.body).to.have.property('id', 1);
    });
  });

  it('Retornando erro para pet inexistente (GET /pet/{petId})', () => {
    cy.api({
      method: 'GET',
      url: '/pet/999999',
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(404);
      expect(response.body.message).to.include('Pet not found');
    });
  });

  it('Adicionando um novo pet (POST /pet)', () => {
    const pet = {
      id: 123456789,
      name: "Rex",
      status: "available"
    };

    cy.api({
      method: 'POST',
      url: '/pet',
      body: pet,
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.include(pet);
    });
  });

  it('Atualizando um pet (PUT /pet)', () => {
    const updatedPet = {
      id: 123456789,
      name: "Rex Atualizado",
      status: "sold"
    };

    cy.api({
      method: 'PUT',
      url: '/pet',
      body: updatedPet,
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.include(updatedPet);
    });
  });

  it('Deletando um pet (DELETE /pet/{petId})', () => {
    cy.api({
      method: 'DELETE',
      url: '/pet/123456789',
    }).then((response) => {
      expect(response.status).to.eq(200);
    });
  });
});
