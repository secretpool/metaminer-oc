'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var smi = _interopDefault(require('node-nvidia-smi'));

// src/app.coffee
smi(function(err, data) {
  // handle errors
  if (err) {
    console.warn(err);
    process.exit(1);
  }
  // display GPU information
  return console.log(JSON.stringify(data, null, ' '));
});
//# sourceMappingURL=app.js.map
