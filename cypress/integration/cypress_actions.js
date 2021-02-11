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
  cy.visit('/automation-practice-form');
  cy.get('[placeholder="First Name"]').type('Mimimmimim')
  cy.get('[placeholder="Last Name"]').type('Mryamrya');
  cy.get('[placeholder="name@example.com"]').type('murmur@gmail.com');
  cy.get('[for="gender-radio-2"]').click();
  cy.get('[placeholder="Mobile Number"]').type('04357456312');

  // cy.get('#dateOfBirthInput').then((year) => {
  //   //cy.get(year).click()
  //   cy.get('.react-datepicker__year-select').select('1990')
  //   cy.get('.react-datepicker__month-select').select('February')
  //   cy.get('.react-datepicker__day.react-datepicker__day--010')
  // });
  
  cy.get('#dateOfBirthInput').type('{selectall}13 Feb 1992{enter}')

  cy.get('#subjectsContainer').type('Ch{downArrow}{enter}')
  

//   cy.get('.subjects-auto-complete__control.css-yk16xz-control').type('Chemistry{enter}')
  
  cy.contains('.custom-control', 'Sport')
    .find('[value="1"]').click({force: true})

  cy.get('[placeholder="Current Address"]').type('0435ewr34yrejvio2e84qihdvc fe8y23ehsv n uerweha7456312');

  // cy.get('.css-1wa3eu0-placeholder').contains('Select State').click()
  cy.get('#state').contains('Select State').type('Haryana{enter}')
  cy.get('#city').contains('Select City').type('Karnal{enter}')
  cy.get('#submit').click()
}
)
