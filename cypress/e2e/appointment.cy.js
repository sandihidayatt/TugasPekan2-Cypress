import appointmentPage from "../support/PageObject/appointmentPage.cy"
const appointmentData = require('../fixtures/Katalon/appointment.json')
describe('Make Appointment Fuction', () => {
  const appointment = new appointmentPage
  it('Success Make Appointment Tokyo CURA Healthcare', () => {
    cy.login() // go to login
    appointment.chooseFacilityTokyo() // choose facility
    appointment.clickReadmission() // active readmission
    appointment.clickProgramMedicare() // click mediacare
    appointment.clickDate() // click date
    appointment.chooseDate() // choose date
    appointment.inputComment() // input comment
    appointment.clickAppointment() // click appointmen button
    //validation
    appointment.checkTitle() // check title
    appointment.checkUrl() // check url
    appointment.checkFacilityTokyo() //check value facility
    appointment.checkDate() // check value date
  })

  it('Success Make Appointment Hongkong CURA Healthcare', () => {
    cy.login() // go to login
    appointment.chooseFacilityHongkong() // choose facility
    appointment.clickReadmission() // active readmission
    appointment.clickProgramMedicaId()
    appointment.clickDate() // click date
    appointment.chooseDate() // choose date
    appointment.inputComment() // input comment
    appointment.clickAppointment() // click appointmen button
    //validation
    appointment.checkTitle() // check title
    appointment.checkUrl() // check url
    appointment.checkFacilityHongkong() //check value facility
    appointment.checkDate() // check value date
  })

  it('Success Make Appointment Seoul CURA Healthcare', () => {
    cy.login() // go to login
    appointment.chooseFacilitySeoul() // choose facility
    appointment.clickProgramNone()
    appointment.clickDate() // click date
    appointment.chooseDate() // choose date
    appointment.inputComment() // input comment
    appointment.clickAppointment() // click appointmen button
    //validation
    appointment.checkTitle() // check title
    appointment.checkUrl() // check url
    appointment.checkFacilitySeoul() //check value facility
    appointment.checkDate() // check value date
  })

  it('Make Appointment Empty Date', () => {
    cy.login() // go to login
    appointment.chooseFacilitySeoul() // choose facility
    appointment.clickProgramNone() 
    appointment.inputComment() // input comment
    appointment.clickAppointment() // click appointmen button
    //validation
    cy.on('window:alert', (text) => {
      expect(text).to.equal('Please fill out this field.'); // check alert warning message
    });

  })
})