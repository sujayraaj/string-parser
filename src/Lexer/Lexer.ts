import Token from './Token'
import TokenType from './TokenType'
const isAlphaNumeric = function(str:string|undefined) {
    if(!str) {
        return false;
    }
    var regExp = /^[A-Za-z0-9\-]+$/;
    return (str.match(regExp));
  };
  
class Lexer {
    private index = 0;
    constructor(readonly text: String) {}

    nextToken: () => Token | null = () => {

        let ch = this.text[this.index];
        if( this.index > this.text.length ) {
            return null;
        }
        if(isAlphaNumeric(ch)) {
            let ret = ''
            while(isAlphaNumeric(ch)) {
                ret += ch;
                this.index++;
                ch = this.text[this.index];
            }
            let token: Token = {
                value: ret,
                tokenType: TokenType.TEXT
            }
            return token;
        }
        if(this.isWhitespaceChar(ch)) {
            let ret = ''
            while(this.isWhitespaceChar(ch)) {
                ret+= ch;
                this.index++;
                ch = this.text[this.index];
            }
            let token: Token = {
                value: ret,
                tokenType: TokenType.WHITESPACE
            }
            return token;
        }

        if(this.text.slice(this.index, this.index+2) === TokenType.END_TAG) {
            this.index+=2
            let token: Token = {
                value: TokenType.END_TAG as string,
                tokenType: TokenType.END_TAG
            }
            return token;
        } else if(ch === "\/") {
            this.index+=1;
            let token: Token = {
                value: ch || '',
                tokenType: TokenType.TEXT
            }
            return token;
        }
        if(Object.values(TokenType).find(type => type === ch)){
            this.index++;
            let token: any = {
                tokenType: Object.values(TokenType).find(type => type === ch),
                value: ch
            }

            return token;    
        }
        {
            if(!ch) {
                return null;
            }
            this.index++;
            let token: Token = {
                value: ch,
                tokenType: TokenType.TEXT
            }
            return token;
        }
        return null
    }

    nextChar = () => {
        const peek =  this.peekChar()
        if(peek)
            this.index += peek.length;
        return peek || '';
    }


    peekChar = () => {
        if(this.index < this.text.length) {
            let str=this.text[this.index];
            Object.values(TokenType).find(type => {
                if(type !== TokenType.TEXT && type !== TokenType.WHITESPACE) {
                    if(this.text.slice(this.index).startsWith(type)) {
                        str = type;
                    }
                }
            })
            return str
            
        }
        return null;
    }

    isTextChar: (ch: string | undefined) => boolean = (ch) => {
        if(!ch) {
            return false;
        }
        if(Object.values(TokenType).some(type => type === ch) || this.isWhitespaceChar(ch)) {
            return false
        }
        return true
    }
    isWhitespaceChar: (ch: string | undefined) => boolean = (ch) => {
        if(!ch) {
            return false;
        }
        switch(ch) {
            case " ":
            case "\t":
            case "\r":
            case "\n":
                return true;
            default:
                return false
        }
    }
}

export default Lexer;