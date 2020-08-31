const core = require('@actions/core');
const github = require('@actions/github');

const fs = require('fs');

try {
    // `who-to-greet` input defined in action metadata file
    const githubToken = core.getInput('github-token');
    const jsonData = fs.readFileSync('json-data').join("");
    const data = JSON.parse(jsonData);
    console.log(data);


} catch (error) {
    core.setFailed(error.message);
}