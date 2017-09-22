const registerAccount = require("./register");
class Generator {
    constructor(initialUsername, initialPass, outFile) {
        this.uname = initialUsername;
        this.pass = initialPass;
        this.genIndex = 0;
        this.out = outFile;
    }
}
Generator.prototype.generate = async (amount, ctx) => {
    console.log('Generating ' + amount + ' accounts');
    var configOut = {
        "multi_account": true,
        "accounts": [ ]
    };
    for (; ctx.genIndex < amount; ++ctx.genIndex) {
        const username = `${ctx.uname}_${ctx.genIndex}`,
            password = ctx.pass;
        let res = await registerAccount(username, password);
        console.log('Generated accout #' + ctx.genIndex);
        configOut.accounts.push({
            "user": username,
            "pass": password,
            "wpm": 120,
            "accuracy": 0.99
        });
    }
    console.log(`Finished generating ${ctx.genIndex} accounts.`);
}

module.exports = Generator;