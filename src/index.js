const register = require('./register'); // Async function that registers accounts
let init = async () => {
    let res = await register('__username123__', '123asd123');
    console.log(res);
}
init().catch(e => {
    console.error('Init exception:');
    console.error(e);
});