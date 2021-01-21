/**
 * styled-string-parser
 * A to and fro parsing utility for styled strings
 */

/**
 * TODO: document
//  */
// interface Node {
//     content: string;
//     properties: {
//         [key: string]: string;
//     }
// }


// export function styledStringParser(str: string) : Node[] {
//     // TODO: implement
//     return [
//         {
//             content: "World",
//             properties: {
//                 'a':'b',
//                 'd': 'e'
//             }
//         }
//     ]
// }

import {tokenize, parse} from './utils';

const tokens = tokenize("Hello World");
console.log(parse(tokens))

