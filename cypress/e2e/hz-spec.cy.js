// npx cypress run --browser chrome --spec './cypress/e2e/hz-spec.cy.js'

// npx cypress run 
// npx cypress open
beforeEach(() => {
  cy.visit('/')
  cy.viewport('macbook-16')
  cy.reload(true)
  cy.get('article.modal').not('.active-model')
})

afterEach(() => {
  cy.reload(true)
})

describe("Navigate to Menu Page and back to Home Page", () => {
  it ('To Menu Page', () => {
    cy.get('ul.navigation-menu.flex-row.pop-font').not('.active')
    .get('li:nth-child(2)').contains("Menu").click()
    cy.url().should('include', '/menu')
    
    cy.get('ul.navigation-menu.flex-row.pop-font').not('.active')
    .get('li:nth-child(1)').contains("Home").click()
    cy.location().should((loc) => {
      expect(loc.href).to.eq(Cypress.config().baseUrl)
    })
  })
})

// Reciepe 

describe("Navigate to About Page and back to Home Page", () => {
  it ('To About Page', () => {
    cy.get('ul.navigation-menu.flex-row.pop-font').not('.active')
    .get('li:nth-child(4)').contains("About").click()
    cy.url().should('include', '/about')

    cy.get('ul.navigation-menu.flex-row.pop-font').not('.active')
    .get('li:nth-child(1)').contains("Home").click()
    cy.location().should((loc) => {
      expect(loc.href).to.eq(Cypress.config().baseUrl)
    })
  })
})

describe("Navigate to Contact Page and back to Home Page", () => {
  it ('To Contact Page', () => {
    cy.get('ul.navigation-menu.flex-row.pop-font').not('.active')
    .get('li:nth-child(5)').contains("Contact").click()
    cy.url().should('include', '/contact')

    cy.get('ul.navigation-menu.flex-row.pop-font').not('.active')
    .get('li:nth-child(1)').contains("Home").click()
    cy.location().should((loc) => {
      expect(loc.href).to.eq(Cypress.config().baseUrl)
    })
  })
})

describe("Open login page", () => {
  it('Open and close login page', () => {
    cy.get('div.passive-button-style').contains("Log in").click()
    cy.get('button.close-modal-btn').click()
  })
})

describe("Register Test Case", () => {
  it ('Try registering new account', () => {
    cy.get('div.passive-button-style').contains("Log in").click()
    cy.get('a.modal-signup-btn').click()
    cy.url().should('include', '/register')
    cy.get('form.registration-form')
    .get('input[name="fullname"][type="text"]').type('My Name')
    .get('input[name="email"][type="text"]').eq(1).type('mynewemail@gamil.com')
    .get('section.password-section')
    .get('input[type="password"][name="password"]').eq(1).type('mynewpassword')
    .get('input[type="password"][name="repeatPassword"]').type('mynewpassword')
    .get('button[class=register-btn][type=submit]').click()
  })
})

describe("Login Test Case", () => {
  it ('Login with present account', () => {
    // cy.get('[class=login-and-cart]:contains("Log in")')
    cy.get('div.passive-button-style').contains("Log in").click()
    cy.get('article.modal').not('.null')
    cy.get('input[name="email"][type="text"]').type('myemail@gmail.com')
    cy.get('input[name="password"][type="password"]').type('mypassword')
    cy.get('button.modal-login-btn').click()
    // cy.get('button.close-modal-btn').click()
  })
})