import test from 'ava'
import { testResults, testStrings } from '../datum'
import styledStringParser from '../../src/index';
/**
 * Unit under test
 */

Object.keys(testStrings).map((key:any,index) => {
    test(`# ${index} `,test => {
        const testString = (testStrings as any)[key as any];
        const exp = JSON.stringify(testResults[key as any]);
        const got =  JSON.stringify(styledStringParser(testString));
        test.assert(exp === got);        
    })
});