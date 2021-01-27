import Token from "../Lexer/Token"
import TokenType from "../Lexer/TokenType"


class FiniteAutomaton {

    initialState = 1
    leftBraceState = 2
    startTextState = 3
    endTextState = 4
    startTagState = 5
    propertyState = 6
    colonState = 7
    startValueState = 8
    endValueState = 9
    endTagState = 10
    rightBraceState = 11

    automatonMap: any  = {
        1: {
            [TokenType.WHITESPACE]: 1,
            [TokenType.LEFT_BRACE]: 2
        },
        2: {
            [TokenType.WHITESPACE]: 2,
            [TokenType.BACKTICK]: 3
        },
        3: {
            [TokenType.TEXT]: 3,
            [TokenType.WHITESPACE]: 3,
            [TokenType.LEFT_BRACE]: 3,
            [TokenType.RIGHT_BRACE]: 3,
            [TokenType.START_TAG]: 3,
            [TokenType.END_TAG]: 3,
            [TokenType.COLON]: 3,
            [TokenType.PIPE]: 3,
            [TokenType.SEMICOLON]: 3,
            [TokenType.BACKTICK]: 4
    },
        4: {
            [TokenType.WHITESPACE]: 4,
            [TokenType.START_TAG]: 5
        },
        5: {
            [TokenType.WHITESPACE]: 5,
            [TokenType.TEXT]: 6
        },
        6: {
            [TokenType.WHITESPACE]: 6,
            [TokenType.COLON]: 7
        },
        7: {
            [TokenType.WHITESPACE]: 7,
            [TokenType.BACKTICK]: 8,
            [TokenType.TEXT]: 9
        },
        8: {
            [TokenType.TEXT]:8,
            [TokenType.WHITESPACE]:8,
            [TokenType.LEFT_BRACE]:8,
            [TokenType.RIGHT_BRACE]:8,
            [TokenType.START_TAG]:8,
            [TokenType.END_TAG]:8,
            [TokenType.COLON]:8,
            [TokenType.PIPE]:8,
            [TokenType.SEMICOLON]:8,
            [TokenType.BACKTICK]:9
        },
        9: {
            [TokenType.WHITESPACE]: 9,
            [TokenType.PIPE]: 7,
            [TokenType.SEMICOLON]: 5,
            [TokenType.END_TAG]: 10
        },
        10: {
            [TokenType.WHITESPACE]: 10,
            [TokenType.RIGHT_BRACE]: 11
        },
    }

    private currentState = 1

    transit = (token: Token): number => {
        const innerMap = this.automatonMap[this.currentState];

        let state = innerMap ? innerMap[token.tokenType] : this.initialState;
        // console.log('FOR TOKEN::::', JSON.stringify(token), ' STATE-TRANSITION:::: ', this.currentState, ' =>> ', state, ' isUndefined ? ', !state, ' default: ', state || this.initialState ) ;
        this.currentState = state || this.initialState;
        if(this.currentState === this.initialState) {
            const innerMap = this.automatonMap[this.currentState];
            let val = innerMap ? innerMap[token.tokenType] : this.initialState
            this.currentState = val || this.initialState;
        }
        return this.currentState
    }
}

export default FiniteAutomaton;