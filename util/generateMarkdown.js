// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { 
  return `![License](https://img.shields.io/badge/License-${license}-blue.svg)`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown({ title, description, instilation, usage, license, contributing, tests, questions }) {
  return `# ${title}  ${renderLicenseBadge(license)}
  ## Table of contents
  1. [Description](#description)
  2. [Instilation](#instilation)
  3. [Usage](#useage)
  4. [License](#license)
  5. [Contributing](#contributing)
  6. [Tests](#tests)
  7. [Quesions](#questions)
  ## Description
  * ${description}
  ## Instilation
  * ${instilation}
  ## Usage
  * ${usage}
  ## License 
  * This License is under ${license}.
  ## Contributing
  * ${contributing}
  ## Tests
  * ${tests}
  ## Questions
  * Please send any issues/questions to https://github.com/${questions}
`;
}

module.exports = generateMarkdown;
