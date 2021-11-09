# React: Editable Table

Complete a partially completed React editable table application. Certain core React functionalities have already been implemented. 

Complete the application as shown below in order to pass all the unit tests.

![](https://hrcdn.net/s3_pub/istreet-assets/dDSNzZSlzAKqWzyDEU1LtQ/editable_table.gif)

The application has 3 components:

*   The App component, which renders the table with employee data.
*   The Employee component, which forms an employee entry with name, position, and salary.
*   The AddEmployee component, which consists of multiple inputs for adding a new employee entry.

The application has the following functionalities:

*   **For the Employee component:**

    *   Each employee object has the following keys:

        *   id: The unique ID of the employee (Integer)

        *   name: The name of the employee (String)

        *   position: The current role of the employee in the company (String)

        *   salary: The current salary of the employee (Integer)

    *   Initially, **the "Save" buttons for saving a new salary are disabled.**

    *   The salary field becomes editable when clicked.

    *   The "Save" button for a specific employee is only enabled when the edited salary value is set and different from the existing value.

    *   Clicking the "Save" button updates the salary field with the new value, and the salary field again becomes not editable.

*   **For the AddEmployee component:**

    *   Each new employee added to the list should have a unique incremental ID property attached to it.

    *   Initially, the "Add" button for adding a new employee entry is disabled.

    *   The "Add" button becomes enabled only when all fields are filled.

    *   Clicking the "Add" button adds a new employee entry to the table and reset input fields.

The following data-testid attributes are required in the component for the tests to pass:

*   The table should have the data-testid attribute 'table'.
*   The employee uneditable salary fields should have the data-testid attributes 'employee-salary-div-0', 'employee-salary-div-1', and so on.
*   The employee salary inputs should have the data-testid attributes 'employee-salary-input-0', 'employee-salary-input-1', and so on.
*   The "Save" buttons should have the data-testid attributes 'employee-save-button-0', 'employee-save-button-1', and so on.
*   The new employee name input should have the data-testid attribute 'new-employee-name-input'.
*   The new employee position input should have the data-testid attribute 'new-employee-position-input'.
*   The new employee salary input should have the data-testid attribute 'new-employee-salary-input'.
*   The "Add" button should have the data-testid attribute 'add-new-employee-button'.

Please note that the component has the above data-testid attributes for test cases and certain classes and ids for rendering purposes. It is advised not to change them.

## Environment 

- React Version: 16.13.1
- Node Version: ^12.18.3
- Default Port: 8000

## Project Specifications 

**Read-Only Files**
- `src/App.test.js`

**Commands**
- run: 
```bash
bash bin/env_setup && . $HOME/.nvm/nvm.sh && npm start
```
- install: 
```bash
bash bin/env_setup && . $HOME/.nvm/nvm.sh && npm install
```
- test: 
```bash
bash bin/env_setup && . $HOME/.nvm/nvm.sh && npm test
```
