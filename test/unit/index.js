/* eslint import/no-extraneous-dependencies: 0 */
const { test } = require('tap');
const exec = require('child_process').exec;
const path = require('path');

process.chdir(path.join(process.cwd(), './test/fixtures'));

const dlfe = require('./../../');
const expected = 'hello gritcode';

// node module
test('accepts query parameters', t => {
  const data = dlfe()('hello');
  t.strictSame(data, expected);
  t.end();
});

// cli
test('accepts query parameters', t => {
  const cmd = 'npm run -s dlfe -- hello';
  exec(cmd, (error, stdout, stderr) => {
    t.strictSame(stdout, expected);
    t.end();
  });
});