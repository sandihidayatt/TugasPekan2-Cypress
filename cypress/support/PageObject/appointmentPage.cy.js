class appointmentPage {
    facility = '#combo_facility'
    readmission = '#chk_hospotal_readmission'

    chooseFacilityTokyo() {
        cy.get('#combo_facility').select('Tokyo CURA Healthcare Center')
    }
    chooseFacilityHongkong() {
        cy.get('#combo_facility').select('Hongkong CURA Healthcare Center')
    }
    chooseFacilitySeoul() {
        cy.get('#combo_facility').select('Seoul CURA Healthcare Center')
    }
    clickReadmission(){
        cy.get('#chk_hospotal_readmission').click()
    }
    clickProgramMedicare(){
        cy.get('#radio_program_medicare').click()
    }
    clickProgramMedicaId(){
        cy.get('#radio_program_medicaid').click()
    }
    clickProgramNone(){
        cy.get('#radio_program_none').click()
    }
    clickDate(){
        cy.get('#txt_visit_date').click()
    }
    chooseDate(){
        cy.get('.datepicker-days .day:not(.old):not(.new):first').click()
    }
    inputComment(){
        cy.get('#txt_comment').type('This is a test appointment')
    }
    clickAppointment(){
        cy.get('#btn-book-appointment').click()
    }

    //validation
    checkTitle(){
        cy.get('h2').should('have.text','Appointment Confirmation')
    }
    checkUrl(){
        cy.url('include','/#summary')
    }
    checkFacilityTokyo(){
        cy.get('#facility').should('have.text','Tokyo CURA Healthcare Center')
    }
    checkFacilityHongkong(){
        cy.get('#facility').should('have.text','Hongkong CURA Healthcare Center')
    }
    checkFacilitySeoul(){
        cy.get('#facility').should('have.text','Seoul CURA Healthcare Center')
    }
    checkDate(){
        cy.get('#visit_date').should('have.text','01/09/2023')
    }

}
export default appointmentPage