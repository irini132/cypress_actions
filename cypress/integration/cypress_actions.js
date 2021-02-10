// Basic level:
// 1. Fill all fields in forms except "picture" 
// 2. Click on [Submit] button
// 3. Validate inputed data in modal window
// Site: https://demoqa.com/automation-practice-form

// Advanced level:
// Check next test cases:
// 1. Pagination 
// 2. Rows count selection
// 3. Add new worker
// 4. Delete worker
// 5. Delete all worker
// 6. Find worker in search field and edit it
// 7. Validate data in worker row after creating worker
// 8. Check search by all column values

// https://demoqa.com/webtables

it('Fulfill the form', () => {
  cy.visit('/automation-practice-form')
  cy.get('[placeholder="First Name"]').type('Mimimmimim')
  cy.get('[placeholder="Last Name"]').type('Mryamrya')
  cy.get('[placeholder="name@example.com"]').type('murmur@gmail.com')
  cy.get('[for="gender-radio-2"]').click()
  cy.get('[placeholder="Mobile Number"]').type('04357456312')

  // cy.get('#dateOfBirthInput').type('{selectAll}14 Feb 2001{enter}')

  // cy.get('#dateOfBirthInput').click()
  // cy.get('.react-datepicker__year-select').contains('1990').click({ force: true })
  // cy.get('.react-datepicker__month-select').contains('February').click({ force: true })
  // cy.get('.react-datepicker__day.react-datepicker__day--009').click({ force: true })
  cy.get('.subjects-auto-complete__placeholder.css-1wa3eu0-placeholder').type('ch', { delay: 1000 });
  cy.contains('.subjects-auto-complete__control.css-yk16xz-control', 'Chemistry').select()
}
)
