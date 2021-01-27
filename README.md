# styled-string-parser
[![License][]](https://opensource.org/licenses/Apache-2.0)
[![NPM Package][]](https://npmjs.org/package/styled-string-parser)
[![Build status][]](https://travis-ci.org/sujayraaj/styled-string-parser)
[![Code Coverage][]](https://codecov.io/gh/sujayraaj/styled-string-parser)

[License]: https://img.shields.io/badge/License-Apache%202.0-blue.svg
[NPM Package]: https://img.shields.io/npm/v/styled-string-parser.svg
[Build status]: https://travis-ci.org/sujayraaj/styled-string-parser.svg?branch=master
[Code Coverage]: https://codecov.io/gh/sujayraaj/styled-string-parser/branch/master/graph/badge.svg

> A to and fro parsing utility for styled strings

## Install

``` shell
npm install styled-string-parser
```

## Use

``` typescript
import styledStringParser from 'styled-string-parser'

console.log(styledStringParser('{`World`<a:b|c;d:e/>}')))
/* Output:
* [ { content: 'World', properties: { a: 'c', d: 'e' } } ]
*/
```

## Related

TODO

## Acknowledgments

TODO
