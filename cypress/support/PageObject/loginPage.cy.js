class loginPage {
    username = '#txt-username'
    password = '#txt-password'
    login = '#btn-login'
    warningMessage = '.text-danger'
    titleAppointment = 'h2'

    visit(){
        cy.visit('https://katalon-demo-cura.herokuapp.com/')
    }
    inputUsername(username){
        cy.input(this.username, username)
    }

    inputPassword(password){
        cy.input(this.password, password)
    }
    clickLogin(){
        cy.get(this.login).click()
    }
    checkLoginUrl(){
        cy.url().should('include','/profile.php#login')
    }
    checkLoginAppointment(){
        cy.url().should('include', '/#appointment')
    }
    checkWarningMessage(){
        cy.get(this.warningMessage).should('be.visible')
    }
    checkTitleAppoitment(){
        cy.get(this.titleAppointment).should('have.text','Make Appointment')
    }
}

export default loginPage