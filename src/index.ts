/**
 * styled-string-parser
 * A to and fro parsing utility for styled strings
 */

import {tokenize, parse} from './utils';

const styledStringParser = (str: string) => parse(tokenize(str))

export default styledStringParser;
