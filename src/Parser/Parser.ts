import Token from "../Lexer/Token";
import Node from "./Node";
import FiniteAutomatonFactory from './FiniteAutomaton';
import TokenType from "../Lexer/TokenType";
interface Declarations {
    [key: string]:string;
}

class Parser {
    constructor(readonly tokens: Token[]) {}
    parse: () => Node[] = () => {
        const syntaxTree: Node[] = [];
        const finiteAutomaton = new FiniteAutomatonFactory();
        const queue: Token[] = [];
        const text: string[] = []
        this.tokens.forEach(token => {
            let state = finiteAutomaton.transit(token);
            switch(state) {
                case finiteAutomaton.initialState:
                    while(queue.length) {
                        const currToken = queue.shift() || { tokenType: TokenType.BACKTICK, value: '' };
                        if(currToken.tokenType !== TokenType.TEXT && currToken.tokenType !== TokenType.WHITESPACE) {
                            text.push(currToken.tokenType);
                        } else {
                            text.push(currToken.value)
                        }
                    }
                    if(token.tokenType !== TokenType.TEXT && token.tokenType !== TokenType.WHITESPACE) {
                        text.push(token.tokenType);
                    } else {
                        text.push(token.value)
                    }
                    break
                case finiteAutomaton.leftBraceState:
                    if(token.tokenType === TokenType.LEFT_BRACE) {
                        while(queue.length) {
                            const currToken = queue.shift() || { tokenType: TokenType.BACKTICK, value: '' };
                            if(currToken.tokenType !== TokenType.TEXT && currToken.tokenType !== TokenType.WHITESPACE) {
                                text.push(currToken.tokenType);
                            } else {
                                text.push(currToken.value)
                            }
                        }
                    }
                    queue.push(token)
                    break;
                case finiteAutomaton.rightBraceState:
                    if(text.length) {
                        syntaxTree.push({
                            content: text.join(''),
                            properties: {}
                        })
                    }
                    text.length = 0;
                    const ruleSetTokens:Token[] = [];

                    while(queue.length) {
                        const n = queue.shift();
                        if(n){
                            ruleSetTokens.push(n);
                        }
                    }
                    ruleSetTokens.push(token);
                    syntaxTree.push(this.getRuleSetNode(ruleSetTokens));
                    break;
                default:
                    queue.push(token);
            }

        });
        while(queue.length) {
            const currToken = queue.shift() || { tokenType: TokenType.BACKTICK, value: '' };
            if(currToken.tokenType !== TokenType.TEXT && currToken.tokenType !== TokenType.WHITESPACE) {
                text.push(currToken.tokenType);
            } else {
                text.push(currToken.value)
            }
        }
        if(text.length) {
            syntaxTree.push({
                content: text.join(''),
                properties: {}
            })
        }
        return syntaxTree
    }
    getRuleSetNode: (ruleSetTokens: Token[]) => Node = ruleSetTokens => {
        let finiteAutomaton = new FiniteAutomatonFactory();
        let ruleSetText = ""
        let ruleSetProperty = ""
        let ruleSetValue = ""
        let ruleSetDeclarations: Declarations = {};
        ruleSetTokens.forEach(ruleSetToken => {
            let ruleSetState = finiteAutomaton.transit(ruleSetToken)
            switch(ruleSetState) {
                case finiteAutomaton.startTextState:
                    if(ruleSetToken.tokenType !== TokenType.BACKTICK ) {
                        if(ruleSetToken.tokenType !== TokenType.TEXT && ruleSetToken.tokenType !== TokenType.WHITESPACE) {
                            ruleSetText += ruleSetToken.tokenType
                        } else {
                            ruleSetText += ruleSetToken.value
                        }
                    }
                    break;
                case finiteAutomaton.propertyState:
                    if (ruleSetToken.tokenType == TokenType.TEXT) {
                        ruleSetProperty = ruleSetToken.value
                    }
                    break;
                case finiteAutomaton.startValueState:
                    if (ruleSetToken.tokenType != TokenType.BACKTICK) {
                        if(ruleSetToken.tokenType !== TokenType.TEXT && ruleSetToken.tokenType !== TokenType.WHITESPACE) {
                            ruleSetValue += ruleSetToken.tokenType
                        } else {
                            ruleSetValue += ruleSetToken.value
                        }
                    }
                    break;
                case finiteAutomaton.endValueState:
                    if (ruleSetToken.tokenType == TokenType.BACKTICK)
                        ruleSetDeclarations[ruleSetProperty] = ruleSetValue;
                    if (ruleSetToken.tokenType == TokenType.TEXT)
                        ruleSetDeclarations[ruleSetProperty] = ruleSetToken.value;
                    ruleSetValue = ""
                        break;
            }
        });
        return {content: ruleSetText, properties: ruleSetDeclarations}
    }
}

export default Parser;