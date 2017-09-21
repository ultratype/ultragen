const Generator = require('./Generator'),
    init = async () => {
        // TODO
    }
init().catch(e => { // Run init in promise-based context
    console.error('Init exception:');
    console.error(e);
});