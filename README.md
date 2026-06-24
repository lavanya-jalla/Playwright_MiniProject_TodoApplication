# Playwright Mini Project – Todo Application Testing

This project is an end-to-end automation testing mini project built using **Playwright with JavaScript**.
The application under test is the **TodoMVC React Todo Application**, a simple task management app used for practicing UI test automation.

## Project Objective

The goal of this project is to automate the core functionalities of the Todo application and validate that the application behaves correctly from a user’s perspective.

Using Playwright, this project covers common user actions such as:

* Adding new todo items
* Marking tasks as completed
* Deleting todo items
* Verifying UI behavior and task state changes
* Running automated tests with Playwright Test Runner

## Application Under Test

**TodoMVC React Application:**
https://todomvc.com/examples/react/dist/

This app allows users to:

* Create todo tasks
* Mark tasks as complete/incomplete
* Delete tasks
* Filter tasks by status

## Tech Stack

* **Automation Tool:** Playwright
* **Language:** JavaScript
* **Test Runner:** Playwright Test
* **Platform:** Node.js
* **IDE:** Visual Studio Code

## Project Structure

```bash
Playwright_MiniProject_TodoApplication/
│── .github/
│   └── workflows/          # GitHub Actions workflow files
│
│── tests/                  # Playwright test scripts
│
│── playwright.config.js    # Playwright configuration file
│── package.json            # Project dependencies and scripts
│── package-lock.json
│── .gitignore
```

## Test Scenarios Covered

The project automates important test cases of the Todo application, such as:

### 1. Add a New Todo

* Open the Todo application
* Enter a task in the input field
* Press Enter
* Verify that the task is added to the list

### 2. Mark Todo as Completed

* Add a todo item
* Click the checkbox for the task
* Verify that the task is marked as completed

### 3. Delete a Todo

* Add a todo item
* Delete/remove the task
* Verify that the task is no longer visible in the list

### 4. Validate UI Elements

* Verify input field visibility
* Verify task list updates correctly
* Validate task completion behavior

## Installation and Setup

### 1. Clone the Repository

```bash
git clone https://github.com/lavanya-jalla/Playwright_MiniProject_TodoApplication.git
cd Playwright_MiniProject_TodoApplication
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Install Playwright Browsers

```bash
npx playwright install
```

## Running the Tests

### Run all tests

```bash
npx playwright test
```

### Run tests in headed mode

```bash
npx playwright test --headed
```

### Run a specific test file

```bash
npx playwright test tests/<test-file-name>.spec.js
```

### Open HTML report after execution

```bash
npx playwright show-report
```

## Sample Playwright Test Flow

A typical Playwright test in this project follows these steps:

1. Launch the browser
2. Navigate to the TodoMVC application
3. Locate the todo input field
4. Add a new task
5. Perform actions like complete/delete
6. Validate expected results using assertions

## Example Test Cases

Some example validations performed in this project include:

* Checking whether a newly added todo appears in the list
* Verifying that completed tasks show completed state
* Ensuring deleted tasks are removed successfully
* Confirming the page loads correctly before test execution

## Configuration

The Playwright configuration file is available in:

```bash
playwright.config.js
```

This file can be used to configure:

* Base URL
* Browser settings
* Timeout values
* Reporter settings
* Parallel execution options

## GitHub Actions / CI

This project includes a `.github/workflows` folder, which can be used to run Playwright tests automatically using **GitHub Actions** whenever code is pushed or updated.

## Learning Outcomes

Through this mini project, the following automation testing concepts are practiced:

* Playwright project setup
* Writing UI automation scripts
* Locators and assertions
* Test execution using Playwright Test Runner
* End-to-end workflow validation
* Basic CI integration with GitHub Actions

## Future Enhancements

This project can be extended further by adding:

* Page Object Model (POM) structure
* More validations for filters like **All / Active / Completed**
* Data-driven test scenarios
* Cross-browser execution
* Screenshot capture on failure
* Advanced reporting integration

## Author

**Lavanya Jalla**

GitHub: https://github.com/lavanya-jalla

## Conclusion

This Playwright mini project demonstrates how end-to-end testing can be performed on a Todo application using modern browser automation tools. It is a good beginner-friendly project for understanding Playwright fundamentals and UI automation workflows.
