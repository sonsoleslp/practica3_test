// IMPORTS
const path = require('path');
const Utils = require('./testutils');

const path_assignment = path.resolve(path.join(__dirname, "../", "mod2_cmd_iterators.js"));
// CRITICAL ERRORS
let error_critical = null;

//TESTS
describe("Learning Iterators", function () {

    it('', async function () { this.name = `1: Checking that the file 'mod2_cmd_iterators.js' exists...`;
        this.score = 1;
        this.msg_ok = `The file 'mod2_cmd_iterators.js' has been found`;
        this.msg_err = `The file '${path_assignment}' has NOT been found`;
        const fileexists = await Utils.checkFileExists(path_assignment);
        if (!fileexists) {
            error_critical = this.msg_err;
        }
        fileexists.should.be.equal(true);
    });

    it('', async function () { this.name = `2: Checking that the command 'mod2_cmd_iterators.js' detects input arguments`;
        this.score = 1.75;
        if (error_critical) {
            this.msg_err = error_critical;
            should.not.exist(error_critical);
        } else {
            this.msg_ok = "Obtained the expected output";
            this.input = "one";
            this.expected = "one: 1";
            const { stdout, stderr } = await exec(`node ${path_assignment} ${this.input}`);
            this.output = stdout;

            if (stderr) {
                this.msg_err = `Error executing 'mod2_cmd_iterators.js', Received: ${stderr}`;
                should.not.exist(stderr);
            } else {
                this.msg_err = `The expected output has NOT been obtained.\n\t\tInput: ${this.input}\n\t\tExpected: ${this.expected}\n\t\tReceived: ${this.output.trim()}`;
                Utils.search(this.expected, this.output).should.be.equal(true);
            }
        }
    });

    it('', async function () { this.name = `3: Checking that the command 'mod2_cmd_iterators.js' groups the input arguments`;
        this.score = 1.75;
        if (error_critical) {
            this.msg_err = error_critical;
            should.not.exist(error_critical);
        } else {
            this.msg_ok = "Obtained the expected output";
            this.input = "one one";
            this.expected = "one: 2";
            const { stdout, stderr } = await exec(`node ${path_assignment} ${this.input}`);
            this.output = stdout;
            if (stderr) {
                this.msg_err = `Error running 'mod2_cmd_iterators.js', Received: ${stderr}`;
                should.not.exist(stderr);
            } else {
                this.msg_err = `The expected output has NOT been obtained.\n\t\tInput: ${this.input}\n\t\tExpected: ${this.expected}\n\t\tReceived: ${this.output.trim()}`;
                Utils.search(this.expected, this.output).should.be.equal(true);
            }
        }
    });

    it('', async function () { this.name = `4: Checking that the command 'mod2_cmd_iterators.js' orders the input arguments`;
        this.score = 1.75;
        if (error_critical) {
            this.msg_err = error_critical;
            should.not.exist(error_critical);
        } else {
            this.msg_ok = "Obtained the expected output";
            this.input = "two one";
            this.expected = /one.+?two/s;
            const { stdout, stderr } = await exec(`node ${path_assignment} ${this.input}`);
            this.output = stdout;
            if (stderr) {
                this.msg_err = `Error running 'mod2_cmd_iterators.js', Received: ${stderr}`;
                should.not.exist(stderr);
            } else {
                this.msg_err = `The expected output has NOT been obtained.\n\t\tInput: ${this.input}\n\t\tExpected: ${this.expected}\n\t\tReceived: ${this.output.trim()}`;
                Utils.search(this.expected, this.output).should.be.equal(true);
            }
        }
    });

    it('', async function () { this.name = `5: Checking that the command 'mod2_cmd_iterators.js' groups the ordered arguments`;
        this.score = 2;
        if (error_critical) {
            this.msg_err = error_critical;
            should.not.exist(error_critical);
        } else {
            this.msg_ok = "Obtained the expected output";
            this.input = "two one two";
            this.expected = /one:\s?1.+?two:\s?2/s;
            const { stdout, stderr } = await exec(`node ${path_assignment} ${this.input}`);
            this.output = stdout;
            if (stderr) {
                this.msg_err = `Error running 'mod2_cmd_iterators.js', Received: ${stderr}`;
                should.not.exist(stderr);
            } else {
                this.msg_err = `The expected output has NOT been obtained.\n\t\tInput: ${this.input}\n\t\tExpected: ${this.expected}\n\t\tReceived: ${this.output.trim()}`;
                Utils.search(this.expected, this.output).should.be.equal(true);
            }
        }
    });

    it('', async function () { this.name = `6: Checking that the command 'mod2_cmd_iterators.js' adds the ordered arguments`;
        this.score = 2.25;
        if (error_critical) {
            this.msg_err = error_critical;
            should.not.exist(error_critical);
        } else {
            this.msg_ok = "Obtained the expected output";
            this.input = "one two one one three two";
            this.expected = /one:\s?3.+?three:\s?1.+?two:\s?2/s;
            const { stdout, stderr } = await exec(`node ${path_assignment} ${this.input}`);
            this.output = stdout;
            if (stderr) {
                this.msg_err = `Error running 'mod2_cmd_iterators.js', Received: ${stderr}`;
                should.not.exist(stderr);
            } else {
                this.msg_err = `The expected output has NOT been obtained.\n\t\tInput: ${this.input}\n\t\tExpected: ${this.expected}\n\t\tReceived: ${this.output.trim()}`;
                Utils.search(this.expected, this.output).should.be.equal(true);
            }
        }
    });
});
