const generateMarkdown = data => {
  return `# ${data.title}

## Description
${data.description}

## Table of Contents 
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#test)
* [Questions](#question)

## Installation
${data.install}

## Usage
${data.usage}

## Contributing
${data.contributors}

## License
Project license under ${data.license}

## Tests
${data.test}

## Questions
If you have any questions contact me at ${data.install}. View more of my projects at https://github.com/${data.github}.
`;
}

module.exports = generateMarkdown;
