const tokenize = require('./dist/src/utils').tokenize
const parse = require('./dist/src/utils').parse
const testStrings = require('./dist/test/datum').testStrings;

Object.values(testStrings).map(val => {
    const tokens = tokenize(val);
    console.log(parse(tokens))
})
// const tokens = tokenize("Hello {\`World\`<a:b|c;d:e/>}");


// console.log('tokens::::::: ', tokens)
