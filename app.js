const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
// ​
const OUTPUT_DIR = path.resolve(__dirname, "output");
// console.log(OUTPUT_DIR);

const outputPath = path.join(OUTPUT_DIR, "team.html");
// Tutor - Why cant I console.log this?  ​// console.log(outputPath);

const render = require("./lib/htmlRenderer");
managerList = [];
engineerList = [];
internList = [];
teamList = [];
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
function getPrompts() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Enter Employee name: ",
        name: "name"
      },
      {
        type: "rawlist",
        message: "Enter employee role: ",
        name: "role",
        choices: ["Manager", "Engineer", "Intern"]
      },
      {
        type: "input",
        message: "Enter email address: ",
        name: "email"
      },
      {
        type: "input",
        message: "Enter ID: ",
        name: "userId"
      }
    ])
    // utilize object deconstruction to deconstruct the action key from the response object that comes back from the inquirer prompt
    .then(async ({ name, role, email, userId }) => {
      switch (role) {
        case "Intern":
          await inquirer
            .prompt([
              {
                type: "input",
                message: "Enter school: ",
                name: "school"
              }
            ])
            // utilize object deconstruction to deconstruct the action key from the response object that comes back from the inquirer prompt
            .then(({ school }) => {
              // console.log(name);
              // console.log(role);
              // console.log(email);
              // console.log(school);
              var intern = new Intern(name, userId, email, school);
              internList.push(intern);
              teamList.push(intern);
            });
          break;
        case "Engineer":
          await inquirer
            .prompt([
              {
                type: "input",
                message: "Enter github ID: ",
                name: "github"
              }
            ])
            // utilize object deconstruction to deconstruct the action key from the response object that comes back from the inquirer prompt
            .then(({ github }) => {
              // console.log(name);
              // console.log(role);
              // console.log(email);
              // console.log(github);
              var engineer = new Engineer(name, userId, email, github);
              engineerList.push(engineer);
              teamList.push(engineer);
            });
          break;

        default:
          await inquirer
            .prompt([
              {
                type: "input",
                message: "Enter office number: ",
                name: "officenum"
              }
            ])
            // utilize object deconstruction to deconstruct the action key from the response object that comes back from the inquirer prompt
            .then(({ officenum }) => {
              // console.log(name);
              // console.log(role);
              // console.log(email);
              // console.log(officenum);
              var manager = new Manager(name, userId, email, officenum);
              managerList.push(manager);
              teamList.push(manager);
            });
          break;
      }
      inquirer
        .prompt([
          {
            type: "rawlist",
            message: "Do you want to add another employee? ",
            name: "res",
            choices: ["Yes", "No"]
          }
        ])
        // utilize object deconstruction to deconstruct the action key from the response object that comes back from the inquirer prompt
        .then(({ res }) => {
          if (res === "Yes") {
            getPrompts();
          } else {
            renderHTML();
          }
        });
    });
}

function renderHTML() {
  // console.log(managerList);
  // console.log(engineerList);
  // console.log(internList);
  var team = render(teamList);

  fs.writeFile(outputPath, team, function(err) {
    if (err) {
      throw err;
    }
  });
}
getPrompts();
// ​
// // After the user has input all employees desired, call the `render` function (required
// // above) and pass in an array containing all employee objects; the `render` function will
// // generate and return a block of HTML including templated divs for each employee!
// ​
// // After you have your html, you're now ready to create an HTML file using the HTML
// // returned from the `render` function. Now write it to a file named `team.html` in the
// // `output` folder. You can use the variable `outputPath` above target this location.
// // Hint: you may need to check if the `output` folder exists and create it if it
// // does not.
// ​
// // HINT: each employee type (manager, engineer, or intern) has slightly different
// // information; write your code to ask different questions via inquirer depending on
// // employee type.
// ​
// // HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// // and Intern classes should all extend from a class named Employee; see the directions
// // for further information. Be sure to test out each class and verify it generates an
// // object with the correct structure and methods. This structure will be crucial in order
// // for the provided `render` function to work!```
