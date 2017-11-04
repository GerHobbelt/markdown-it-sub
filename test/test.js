'use strict';

// TODO: these are parsed incorrectly:
//
// ~~~foo~~~
// ~~~foo~ bar~~



var path     = require('path');
var generate = require('@gerhobbelt/markdown-it-testgen');

/*eslint-env mocha*/

describe('markdown-it-sub', function () {
  var md = require('@gerhobbelt/markdown-it')()
              .use(require('../'));

  generate(path.join(__dirname, 'fixtures/sub.txt'), md);
});
