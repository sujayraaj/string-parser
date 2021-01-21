import test from 'ava'
import { testResults, testStrings } from '../datum'
import {tokenize, parse} from '../../src/utils'
/**
 * Unit under test
 */

// Object.values(testStrings).map((testString,index) => {
//     test(`# ${index} `,test => {
//         console.log('test-string: ', testString);
//         const exp = JSON.stringify(testResults[index]);
//         const got =  JSON.stringify(parse(tokenize(testString)));
//         console.log('expected-value ', exp);
//         console.log('got-value ', got);
//         test.assert(exp === got);        
//     })
// })

const styledStringParser = (a:any) => parse(tokenize(a as string)); 
// test('tokenize', t => {
//     Object.values(testStrings).map( (val,ind) => {
//         console.log(ind);
//         console.log(tokenize(val))
//     });
//     t.assert(true);
// });
test('1', t => { return t.assert(JSON.stringify(styledStringParser(testStrings[1])) === JSON.stringify(testResults[1])) })
test('2', t => { return t.assert(JSON.stringify(styledStringParser(testStrings[2])) === JSON.stringify(testResults[2])) })
test('3', t => { return t.assert(JSON.stringify(styledStringParser(testStrings[3])) === JSON.stringify(testResults[3])) })
test('4', t => { return t.assert(JSON.stringify(styledStringParser(testStrings[4])) === JSON.stringify(testResults[4])) })
test('5', t => { return t.assert(JSON.stringify(styledStringParser(testStrings[5])) === JSON.stringify(testResults[5])) })
test('6', t => { return t.assert(JSON.stringify(styledStringParser(testStrings[6])) === JSON.stringify(testResults[6])) })
test('7', t => { return t.assert(JSON.stringify(styledStringParser(testStrings[7])) === JSON.stringify(testResults[7])) })
test('8', t => { return t.assert(JSON.stringify(styledStringParser(testStrings[8])) === JSON.stringify(testResults[8])) })
test('9', t => { return t.assert(JSON.stringify(styledStringParser(testStrings[9])) === JSON.stringify(testResults[9])) })
test('10', t => { return t.assert(JSON.stringify(styledStringParser(testStrings[10])) === JSON.stringify(testResults[10])) })
test('11', t => { return t.assert(JSON.stringify(styledStringParser(testStrings[11])) === JSON.stringify(testResults[11])) })
test('12', t => { return t.assert(JSON.stringify(styledStringParser(testStrings[12])) === JSON.stringify(testResults[12])) })
test('13', t => { return t.assert(JSON.stringify(styledStringParser(testStrings[13])) === JSON.stringify(testResults[13])) })
test('14', t => { return t.assert(JSON.stringify(styledStringParser(testStrings[14])) === JSON.stringify(testResults[14])) })
test('15', t => { return t.assert(JSON.stringify(styledStringParser(testStrings[15])) === JSON.stringify(testResults[15])) })
test('16', t => { return t.assert(JSON.stringify(styledStringParser(testStrings[16])) === JSON.stringify(testResults[16])) })
test('17', t => { return t.assert(JSON.stringify(styledStringParser(testStrings[17])) === JSON.stringify(testResults[17])) })
test('18', t => { return t.assert(JSON.stringify(styledStringParser(testStrings[18])) === JSON.stringify(testResults[18])) })
test('19', t => { return t.assert(JSON.stringify(styledStringParser(testStrings[19])) === JSON.stringify(testResults[19])) })
// test('20', t => { return t.assert(JSON.stringify(styledStringParser(testStrings[20])) === JSON.stringify(testResults[20])) })
// test('21', t => { return t.assert(JSON.stringify(styledStringParser(testStrings[21])) === JSON.stringify(testResults[21])) })
// test('22', t => { return t.assert(JSON.stringify(styledStringParser(testStrings[22])) === JSON.stringify(testResults[22])) })
// test('23', t => { return t.assert(JSON.stringify(styledStringParser(testStrings[23])) === JSON.stringify(testResults[23])) })
// test('24', t => { return t.assert(JSON.stringify(styledStringParser(testStrings[24])) === JSON.stringify(testResults[24])) })
// test('25', t => { return t.assert(JSON.stringify(styledStringParser(testStrings[25])) === JSON.stringify(testResults[25])) })
