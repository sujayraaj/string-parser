import TokenType from './TokenType'

interface Token {
    tokenType: TokenType;
    value: string;
}

export default Token;