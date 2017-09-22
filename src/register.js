const http = require('http'),
    https = require('https'),
    querystring = require("querystring"),
    NT_HOST = 'www.nitrotype.com',
    NT_PORT = 443,
    NT_REG_PATH = '/api/register',
    parseData = data => {
        let res = '';
        try {
            res = JSON.parse(data);
            return res;
        } catch (e) {
            if (res.includes('\\')) {
                res = res.replace(/\\/gi, ''); // Remove all backslashes and retry
                return parseData(res);
            } else {
                return {
                    'success': false,
                    'data': '...'
                }
            }
        }
    },
    request = (user, pass) => {
        return new Promise((resolve, reject) => {
            const req = https.request({
                hostname: NT_HOST,
                port: NT_PORT,
                path: NT_REG_PATH,
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
                }
            }, res => {
                var data = ''; // Response content
                res.setEncoding('utf8');
                res.on('data', c => data += c);
                res.on('error', reject); // Auto reject errors
                res.on('end', () => {
                    var res = parseData(data);
                    resolve(res);
                    // The HTTP session has terminated.
                    return;
                });
            });
            const writeData = querystring.stringify({
                username: user,
                password: pass,
                email: '',
                tz: 'America/Chicago',
                captchaKey: 'ignore'
            });
            req.write(writeData);
            req.end();
        });
    }
module.exports = async function(user, pass) {
    // Wrapper for the original request() function
    return await request(user, pass);
}