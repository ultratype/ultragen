const registerAccount = require("./register"),
    fs = require('fs');
class Generator {
    constructor(initialUsername, initialPass, outFile) {
        this.uname = initialUsername;
        this.pass = initialPass;
        this.genIndex = 0;
        this.outFile = outFile;
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
        if (!res.success) {
            console.log(`WARN: falied to successfully create account "${username}", not adding to config.`);
            continue;
        }
        configOut.accounts.push({
            "user": username,
            "pass": password,
            "wpm": 120,
            "accuracy": 0.99
        });
    }
    console.log(`Finished generating ${ctx.genIndex} accounts. Writing file to ${ctx.outFile}...`);
    fs.writeFile(ctx.outFile, JSON.stringify(configOut), 'utf8', err => {
        if (err) {
            console.log('Failed to write file:\n${err}');
            return;
        } else {
            console.log(`Wrote config file to ${ctx.outFile}.`);
        }
    });
}

module.exports = Generator;