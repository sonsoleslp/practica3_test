// IMPORTS
const should = require('chai').should();
const path = require('path');
const fs = require('fs-extra');
const spawn = require("child_process").spawn;

// CRITICAL ERRORS
let error_critical = null;

// CONSTANTS
const T_WAIT = 2; // Time between commands
const T_TEST = 2 * 60; // Time between tests (seconds)
const path_assignment = path.resolve(path.join(__dirname, "../"));
const quizzes_orig = path.join(path_assignment, 'quizzes.json');
const quizzes_back = path.join(path_assignment, 'quizzes.original.json');
const quizzes_test = path.join(path_assignment, 'tests', 'quizzes.json');
let client = null;

// HELPERS
const timeout = ms => new Promise(res => setTimeout(res, ms));

function to(promise) {
    return promise
        .then(data => {
            return [null, data];
        })
        .catch(err => [err]);
};

//TESTS
describe("CORE19-03_quiz_cmd", function () {

    this.timeout(T_TEST * 1000);

    it('', async function () {
        this.name = `1(Precheck): Checking that the assignment directory exists...`;
        this.score = 0;
        this.msg_ok = `Found the directory '${path_assignment}'`;
        this.msg_err = `Couldn't find the directory '${path_assignment}'`;
        const [error_path, path_ok] = await to(fs.pathExists(path_assignment));
        if (error_path) {
            error_critical = this.msg_err;
        }
        path_ok.should.be.equal(true);
    });



    after("Restoring the original file", async function () {
        if(client){client.kill();await timeout(T_WAIT * 1000);}
        try {fs.copySync(quizzes_back, quizzes_orig, {"overwrite": true});} catch (e){}
    });
});
