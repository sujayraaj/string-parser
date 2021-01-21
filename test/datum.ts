export const testStrings = {
    1 : "Hello World",
    2 : "Hello {World}",
    3 : "Hello \`World\`",
    4 : "Hello :World:",
    5 : "Hello |World|",
    6 : "Hello ;World;",
    7 : "Hello /World/",
    8 : "Hello <World>",
    9 : "Hello </World/>",
    //
    10 : "{\`World\`<a:b|c;d:e/>}",
    11 : "{ \`World\`<a:b|c;d:e/>}",
    12 : "{ \`World\` <a:b|c;d:e/>}",
    13 : "{ \`World\` < a:b|c;d:e/>}",
    14 : "{ \`World\` < a :b|c;d:e/>}",
    15 : "{ \`World\` < a : b|c;d:e/>}",
    16 : "{ \`World\` < a : b |c;d:e/>}",
    17 : "{ \`World\` < a : b | c;d:e/>}",
    18 : "{ \`World\` < a : b | c ;d:e/>}",
    19 : "{ \`World\` < a : b | c ; d:e/>}",
    20 : "{ \`World\` < a : b | c ; d :e/>}",
    21 : "{ \`World\` < a : b | c ; d : e/>}",
    22 : "{ \`World\` < a : b | c ; d : e />}",
    23 : "{ \`World\` < a : b | c ; d : e /> }",
    //
    24 : "  {\`World\`<a:b|c;d:e/>}{\`Mars\`<a:b|c;d:e/>}  ",
    25 : " {{\`World\`<a:b|c;d:e/>}{\`Mars\`<a:b|c;d:e/>}} ",
    26 : "{{\`World\`<a:b|c;d:e/>}}{{\`Mars\`<a:b|c;d:e/>}}",
    27 : "   {\`World\`<a:b|c;d:e/>} {\`Mars\`<a:b|c;d:e/>}   ",
    28 : "  {{\`World\`<a:b|c;d:e/>} {\`Mars\`<a:b|c;d:e/>}}  ",
    29 : " {{\`World\`<a:b|c;d:e/>}} {{\`Mars\`<a:b|c;d:e/>}} ",
    //
    30 : "{ \`World Mars : Android Developer\` <a:b|c;d:e/> }",
    31 : "{ \`World Mars | Android Developer\` <a:b|c;d:e/> }",
    32 : "{ \`World Mars ; Android Developer\` <a:b|c;d:e/> }",
    //
    33 : "Hello { \`World Mars\` <a:b|c;d:e/> }, How are you ?",
    34 : "Hello { \`World Mars\` <a:b|c;d:e/> }, How are you { \`\` <a:b|c;d:e/> }?",
    35 : "Hello { \` World Mars \` <a:b|c;d:e/> }, How are you ?",
    36 : "Hello { \` World Mars \` <a:b|c;d:e/> }, How are you { \`  \` <a:b|c;d:e/> }?",
    //
    37 : "Hello { \`    \` < a : b | c ; d : e /> }",
    38 : "Hello {   \`\`   < a : b | c ; d : e /> }",
    39 : "Hello   \`World\` < a : b | c ; d : e /> }",
    40 : "Hello {  World\` < a : b | c ; d : e /> }",
    41 : "Hello { \`World  < a : b | c ; d : e /> }",
    42 : "Hello { \`World\`   a : b | c ; d : e /> }",
    43 : "Hello { \`World\` <   : b | c ; d : e /> }",
    44 : "Hello { \`World\` < a   b | c ; d : e /> }",
    45 : "Hello { \`World\` < a :   | c ; d : e /> }",
    46 : "Hello { \`World\` < a : b   c ; d : e /> }",
    47 : "Hello { \`World\` < a : b |   ; d : e /> }",
    48 : "Hello { \`World\` < a : b | c   d : e /> }",
    49 : "Hello { \`World\` < a : b | c ;   : e /> }",
    50 : "Hello { \`World\` < a : b | c ; d   e /> }",
    51 : "Hello { \`World\` < a : b | c ; d :   /> }",
    52 : "Hello { \`World\` < a : b | c ; d : e  > }",
    53 : "Hello { \`World\` < a : b | c ; d : e /  }",
    54 : "Hello { \`World\` < a : b | c ; d : e    }",
    55 : "Hello { \`World\` < a : b | c ; d : e />  ",
    56 : "Hello { \`World\` < a : b | c ; d : e | /> }",
    57 : "Hello { \`World\` < a : b | c ; d : e ; /> }",
    58 : "Hello { \`    \` < a : b | c ; d : e /> }, How are you ?",
    59 : "Hello {   \`\`   < a : b | c ; d : e /> }, How are you ?",
    60 : "Hello   \`World\` < a : b | c ; d : e /> }, How are you ?",
    61 : "Hello {  World\` < a : b | c ; d : e /> }, How are you ?",
    62 : "Hello { \`World  < a : b | c ; d : e /> }, How are you ?",
    63 : "Hello { \`World\`   a : b | c ; d : e /> }, How are you ?",
    64 : "Hello { \`World\` <   : b | c ; d : e /> }, How are you ?",
    65 : "Hello { \`World\` < a   b | c ; d : e /> }, How are you ?",
    66 : "Hello { \`World\` < a :   | c ; d : e /> }, How are you ?",
    67 : "Hello { \`World\` < a : b   c ; d : e /> }, How are you ?",
    68 : "Hello { \`World\` < a : b |   ; d : e /> }, How are you ?",
    69 : "Hello { \`World\` < a : b | c   d : e /> }, How are you ?",
    70 : "Hello { \`World\` < a : b | c ;   : e /> }, How are you ?",
    71 : "Hello { \`World\` < a : b | c ; d   e /> }, How are you ?",
    72 : "Hello { \`World\` < a : b | c ; d :   /> }, How are you ?",
    73 : "Hello { \`World\` < a : b | c ; d : e  > }, How are you ?",
    74 : "Hello { \`World\` < a : b | c ; d : e /  }, How are you ?",
    75 : "Hello { \`World\` < a : b | c ; d : e    }, How are you ?",
    76 : "Hello { \`World\` < a : b | c ; d : e />  , How are you ?",
    77 : "Hello { \`World\` < a : b | c ; d : e | /> }, How are you ?",
    78 : "Hello { \`World\` < a : b | c ; d : e ; /> }, How are you ?",
    //
    79 : "{  \`{\`  <a:b|c;d:e/> }",
    80 : "{  \`\`\`  <a:b|c;d:e/> }",
    81 : "{  \`<\`  <a:b|c;d:e/> }",
    82 : "{  \`:\`  <a:b|c;d:e/> }",
    83 : "{  \`|\`  <a:b|c;d:e/> }",
    84 : "{  \`;\`  <a:b|c;d:e/> }",
    85 : "{  \`/>\`  <a:b|c;d:e/> }",
    86 : "{  \`}\`  <a:b|c;d:e/> }",
    87 : "{  \` { \`  <a:b|c;d:e/> }",
    88 : "{  \` \` \`  <a:b|c;d:e/> }",
    89 : "{  \` < \`  <a:b|c;d:e/> }",
    90 : "{  \` : \`  <a:b|c;d:e/> }",
    91 : "{  \` | \`  <a:b|c;d:e/> }",
    92 : "{  \` ; \`  <a:b|c;d:e/> }",
    93 : "{  \` /> \`  <a:b|c;d:e/> }",
    94 : "{  \` } \`  <a:b|c;d:e/> }",
    //
    95 : "Hello { \`World\` < a : b | c ; d : e : f /> }, How are you ?",
    96 : "Hello { \`World\` < a   b   c   d   e   f /> }, How are you ?",
    97 : "Hello { \`World\` < a : b : c : d : e : f /> }, How are you ?",
    98 : "Hello { \`World\` < a | b | c | d | e | f /> }, How are you ?",
    99 : "Hello { \`World\` < a ; b ; c ; d ; e ; f /> }, How are you ?",
    //
    100 : "Hello   World < a : b | c ; d : e />  , How are you ?",
    101 : "Hello { World < a : b | c ; d : e /> }, How are you ?",
    //
    102 : "{{{\`World\`<a:b|c;d:e/>}{\`Mars\`<a:b|c;d:e/>}}}",
    103 : "{{{{\`World\`<a:b|c;d:e/>}{\`Mars\`<a:b|c;d:e/>}}}}",
    //
    104 : "Hello { < a : b | c ; d : e /> }, How are you ?",
    //
    105 : "{   \`'\`  <a:b|c;d:e/> }",
    106 : "{  \` ' \`  <a:b|c;d:e/> }",
    107 : "Hello { \`World's Friend\` <a:b|c;d:e/> }, How are you { \`\` <a:b|c;d:e/> }?",
    108 : "Hello { \` World's Friend \` <a:b|c;d:e/> }, How are you { \`  \` <a:b|c;d:e/> }?",
    //
    109 : "{ \`Google\` < a : b | c ; d :  https://www.google.com   /> }",
    110 : "{ \`Google\` < a : b | c ; d :  https://www.google.com/  /> }",
    111 : "{ \`Google\` < a : b | c ; d : \`https://www.google.com\`  /> }",
    112 : "{ \`Google\` < a : b | c ; d : \`https://www.google.com/\` /> }",
    113 : "{ \`Google\` < a : b | c ; d :  www|www   /> }",
    114 : "{ \`Google\` < a : b | c ; d : \`www|www\`  /> }",
    115 : "{ \`Google\` < a : b | c ; d :  www;www   /> }",
    116 : "{ \`Google\` < a : b | c ; d : \`www;www\`  /> }",
    117 : "{ \`Google\` <a:b|c|\`x y z\`;d:\`https://www.one.com\`|\`https://www.two.com\`;e:\`https://www.three.com\`/> }",
    //
    118 : "{\`World\`\`Mars\`<a:b|c;d:e/>}",
    119 : "{ \`World\` \`Mars\` < a : b | c ; d : e /> }",
    //
    120 : "{ \`World\` < property : \`v a l u e\` /> }",
    121 : "{ \`World\` < property : \` v a l u e \` /> }",
    //
    122 : " { {\`World\`<a:b|c;d:e/>}{\`Mars\`<a:b|c;d:e/>} } ",
    123 : "{ {\`World\`<a:b|c;d:e/>} }{ {\`Mars\`<a:b|c;d:e/>} }",
    124 : "  { {\`World\`<a:b|c;d:e/>} {\`Mars\`<a:b|c;d:e/>} }  ",
    125 : " { {\`World\`<a:b|c;d:e/>} } { {\`Mars\`<a:b|c;d:e/>} } ",
    //
    126 : "Hello World",
    127 : "Hello\tWorld",
    128 : "Hello\rWorld",
    129 : "Hello\nWorld"
}

export const testResults: any = {
    1: [
        {
            content: "Hello World",
            properties: {}
        }
    ],
    2: [
        {
            content: "Hello {World}",
            properties: {}
        }
    ],
    3: [
        {
            content: "Hello \`World\`",
            properties: {}
        }
    ],
    4: [
        {
            content: "Hello :World:",
            properties: {}
        }
    ],
    5: [
        {
            content: "Hello |World|",
            properties: {}
        }
    ],
    6: [
        {
            content: "Hello ;World;",
            properties: {}
        }
    ],
    7: [
        {
            content: "Hello /World/",
            properties: {}
        }
    ],
    8: [
        {
            content: "Hello <World>",
            properties: {}
        }
    ],
    9: [
        {
            content: "Hello </World/>",
            properties: {}
        }
    ],
    10: [
        {
            content: "World",
            properties: {
                'a':'b',
                'd': 'e'
            }
        }
    ],
    11: [
        {
            content: "World",
            properties: {
                'a':'b',
                'd': 'e'
            }
        }
    ],
    12: [
        {
            content: "World",
            properties: {
                'a':'b',
                'd': 'e'
            }
        }
    ],
    13: [
        {
            content: "World",
            properties: {
                'a':'b',
                'd': 'e'
            }
        }
    ],
    14: [
        {
            content: "World",
            properties: {
                'a':'b',
                'd': 'e'
            }
        }
    ],
    15: [
        {
            content: "World",
            properties: {
                'a':'b',
                'd': 'e'
            }
        }
    ],
    16: [
        {
            content: "World",
            properties: {
                'a':'b',
                'd': 'e'
            }
        }
    ],
    17: [
        {
            content: "World",
            properties: {
                'a':'b',
                'd': 'e'
            }
        }
    ],
    18: [
        {
            content: "World",
            properties: {
                'a':'b',
                'd': 'e'
            }
        }
    ],
    19: [
        {
            content: "World",
            properties: {
                'a':'b',
                'd': 'e'
            }
        }
    ],
    20: [
        {
            content: "World",
            properties: {
                'a':'b',
                'd': 'e'
            }
        }
    ],
    21: [
        {
            content: "World",
            properties: {
                'a':'b',
                'd': 'e'
            }
        }
    ],
    22: [
        {
            content: "World",
            properties: {
                'a':'b',
                'd': 'e'
            }
        }
    ],
    23: [
        {
            content: "World",
            properties: {
                'a':'b',
                'd': 'e'
            }
        }
    ],
    24: [
        {
            content: "  ",
            properties: {}
        },
        {
            content: "World",
            properties: {
                a:'b',
                d:'e'
            }
        },
        {
            content: "Mars",
            properties: {
                a:'b',
                d:'e'
            }
        },
        {
            content: "  ",
            properties: {}
        }
    ],
    25: [
        {
            content: " {",
            properties: {}
        },
        {
            content: "World",
            properties: {
                a:'b',
                d:'e'
            }
        },
        {
            content: "Mars",
            properties: {
                a:'b',
                d:'e'
            }
        },
        {
            content: "} ",
            properties: {}
        }
    ]
}