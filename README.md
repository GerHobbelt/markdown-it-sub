# markdown-it-sub

[![Build Status](https://img.shields.io/travis/GerHobbelt/markdown-it-sub/master.svg?style=flat)](https://travis-ci.org/GerHobbelt/markdown-it-sub)
[![NPM version](https://img.shields.io/npm/v/@gerhobbelt/markdown-it-sub.svg?style=flat)](https://www.npmjs.org/package/@gerhobbelt/markdown-it-sub)
[![Coverage Status](https://img.shields.io/coveralls/GerHobbelt/markdown-it-sub/master.svg?style=flat)](https://coveralls.io/r/GerHobbelt/markdown-it-sub?branch=master)

> Subscript (`<sub>`) tag plugin for [markdown-it](https://github.com/markdown-it/markdown-it) markdown parser.

__v1.+ requires `markdown-it` v4.+, see changelog.__

`H~2~0` => `H<sub>2</sub>O`

Markup is based on [pandoc](http://johnmacfarlane.net/pandoc/README.html#superscripts-and-subscripts) definition. But nested markup is currently not supported.


## Install

node.js, browser:

```bash
npm install @gerhobbelt/markdown-it-sub --save
bower install @gerhobbelt/markdown-it-sub --save
```

## Use

```js
var md = require('@gerhobbelt/markdown-it')()
            .use(require('@gerhobbelt/markdown-it-sub'));

md.render('H~2~0') // => '<p>H<sub>2</sub>O</p>'
```

_Differences in browser._ If you load script directly into the page, without
package system, module will add itself globally as `window.markdownitSub`.


## License

[MIT](https://github.com/GerHobbelt/markdown-it-sub/blob/master/LICENSE)
