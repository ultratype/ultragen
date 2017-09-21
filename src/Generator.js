const registerAccount = require("./request");
class Generator {
    constructor(initialUsername, initialPass, outFile) {
        this.uname = initialUsername;
        this.pass = initialPass;
        this.genIndex = 0;
        this.out = outFile;
    }
}
Generator.prototype.generate = async amount => {
    for (; this.genIndex < amount; ++this.genIndex) {
        const username = `${uname}_${genIndex}`,
            password = this.pass,
            res = await registerAccount(username, password);
        console.log("Generated account:", res);
    }
}

module.exports = Generator;