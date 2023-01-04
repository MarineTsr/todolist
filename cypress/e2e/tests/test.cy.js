/// <reference types="cypress" />

import todos from "../../fixtures/todos";

const API_URL = "https://restapi.fr/api/MTtodos";

describe("First tests group", () => {
  beforeEach(() => {
    cy.intercept(API_URL, { fixture: "todos" }).as("getTodos");
    cy.fixture("todos").as("todoList");
    cy.visit("/");
  });

  it('Should find title and/or "todo" text', () => {
    cy.contains(/todo/i);
    cy.contains("h1", /todo/i);
    cy.findByText(/todo/i);
    cy.get(".container").find("h1").should("be.visible").and("have.length", 1);
  });

  it("Should mock get todos request", () => {
    cy.wait("@getTodos").then((response) => cy.log(response));
  });

  it("Should load todos fixture", () => {
    cy.get("@todoList").should("have.length", 5);
  });

  it.skip("Should add new todo", () => {
    cy.get('[data-cy="saisir"]')
      .type("New todo")
      .get('[data-cy="ajouter"]')
      .click();
  });

  it.skip("Should edit an existing todo", () => {
    cy.intercept("PATCH", `${API_URL}/${todos[0]._id}`, {
      ...todos[0],
      edit: true,
    }).as("editTodo");

    cy.get("li.form-check")
      .first()
      .contains("button", /modifier/i)
      .click();

    cy.wait("@editTodo").its("request.body").should("deep.equal", {
      content: todos[0].content,
      edit: true,
      done: false,
    });
  });
});
