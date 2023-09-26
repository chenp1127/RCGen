URL="https://main.d8770hxk753d4.amplifyapp.com/"

describe("Testing incorrect sign inl", () => {
  it("search for sign in button", () => {
    cy.visit(URL)
})

})

// describe("Testing incorrect sign inl", () => {
//   it("search for sign in button", () => {
//     cy.visit(URL)
//     cy.get('a:contains("Sign in")').should('have.attr', 'href')
//     .then((href) => {
//       // SIGN_IN_URL=href
//       // cy.visit(SIGN_IN_URL)
//       cy.visit(href)
//       cy.origin("https://accounts.google.com", () => {
//         cy.get("[type='email']").type('myemail@domain.com')
//         cy.get('button:contains("Next")').click()
//       // .then((href) => {
//       //   cy.visit(href)
//       // })
//     })
//     })
//   })
// })

/*
describe("home page", () => {
  it("the h1 contains the correct text", () => {
    cy.visit(URL)
    cy.get("h1").contains("itchen")
  })
})
describe("home page", () => {
  it("the h1 contains the correct text", () => {
    cy.visit(URL)
    cy.get("h1").contains("itchen")
  })
})

describe("hz-test", () => {
  it("simple test1", () => {
    cy.visit(URL)
    cy.get("[class='banner-alt']").contains("ands")
  })
  
  it("test 2", () => {
    cy.visit(URL)
    // cy.get("dt")
  })
})
*/
