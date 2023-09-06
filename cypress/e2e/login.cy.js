import loginPage from "../support/PageObject/loginPage.cy"
const loginData = require("../fixtures/Katalon/login.json")

describe('Login Fuctionality', () => {
  const login = new loginPage
  it('Success Login', () => {
    cy.menuLogin() // go to menu login
    login.inputUsername(loginData.validUsername) // input valid username
    login.inputPassword(loginData.validPassword) // input vaid password
    login.clickLogin() // click login
    //validation
    login.checkTitleAppoitment() // check title
    login.checkLoginAppointment() // check url success login
  })
  it('Login Invalid Username & Password', () => {
    cy.menuLogin() // go tu menu login
    login.inputUsername(loginData.invalidUsername) // input invalid username
    login.inputPassword(loginData.invalidPassword) // input invalid password
    login.clickLogin() // click login
    //validation
    login.checkWarningMessage() // check warning message
    login.checkLoginUrl() // check url gagal login
  })
  it('Login Invalid Username', () => {
    cy.menuLogin() // go tu menu login
    login.inputUsername(loginData.invalidUsername) // input invalid username
    login.inputPassword(loginData.validPassword) // input valid password
    login.clickLogin() // click login
    //validation
    login.checkWarningMessage() // check warning message
    login.checkLoginUrl() // check url gagal login
  })
  it('Login Invalid Password', () => {
    cy.menuLogin() // go tu menu login
    login.inputUsername(loginData.validUsername) // input valid username
    login.inputPassword(loginData.invalidPassword) // input invalid password
    login.clickLogin() // click login
    //validation
    login.checkWarningMessage() // check warning message
    login.checkLoginUrl() // check url gagal login
  })
  it('Login Empty Username & Password', () => {
    cy.menuLogin() // go tu menu login
    login.clickLogin() // click login
    //validation
    login.checkWarningMessage() // check warning message
    login.checkLoginUrl() // check url gagal login
  })
  it('Login Empty Username', () => {
    cy.menuLogin() // go tu menu login
    login.inputPassword(loginData.validPassword) // input valid password
    login.clickLogin() // click login
    //validation
    login.checkWarningMessage() // check warning message
    login.checkLoginUrl() // check url gagal login
  })
  it('Login Empty Password', () => {
    cy.menuLogin() // go tu menu login
    login.inputUsername(loginData.validUsername) // input valid username
    login.clickLogin() // click login
    //validation
    login.checkWarningMessage() // check warning message
    login.checkLoginUrl() // check url gagal login
  })
})