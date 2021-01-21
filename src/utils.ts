import Token from "./Lexer/Token";
import Lexer from "./Lexer/Lexer"
import Node from "./Parser/Node";
import Parser from "./Parser/Parser";

export const tokenize = (str: string): Token[] => {
    let lex = new Lexer(str);
    let tokens: Token[] = [];
    while(true) {
        let nT = lex.nextToken();
        if(!nT) {
            break;
        }
        tokens.push(nT)
    }
    return tokens;
}

export const parse = (tokens: Token[]) => {
    return new Parser(tokens).parse();
}