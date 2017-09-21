const registerAccount = require("./register");
class Generator {
    constructor(initialUsername, initialPass, outFile) {
        this.uname = initialUsername;
        this.pass = initialPass;
        this.genIndex = 0;
        this.out = outFile;
    }
}
Generator.prototype.generate = async amount => {
    console.log('Generating ' + amount + ' accounts');
    for (; this.genIndex < amount; ++this.genIndex) {
        const username = `${this.uname}_${this.genIndex}`,
            password = this.pass;
        console.log(username, password);
        // let res = await registerAccount(username, password);
        // console.log("Generated account:", res);
    }
}

module.exports = Generator;