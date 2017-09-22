const Generator = require('./Generator'),
    init = async () => {
        let g = new Generator('__dirname', '123asd123', 'out.json');
        g.generate(100, g);
    }
init().catch(e => { // Run init in promise-based context
    console.error('Init exception:');
    console.error(e);
});