#!/usr/bin/env node

var fs = require('fs');
var path = require('path');
var program = require('commander');
var pkg = require('../package.json');

program
  .version(pkg.version);

var benchmarksPath = path.join(__dirname, 'benchmarks');
fs.readdirSync(benchmarksPath).forEach(function(filename) {
  var command = program.command(filename.replace(/\.js$/, ''));
  command.action(function() {
    var execFileSync = require('child_process').execFileSync;

    var filepath = path.join(benchmarksPath, filename);
    execFileSync(process.argv[0], [
      '--harmony',
      filepath
    ], {
      stdio: ['ignore', process.stdout, process.stderr],
      env: {
        NODE_ENV: 'production'
      }
    });
  });
});

program.parse(process.argv);

if (!program.args.length) {
  program.help();
}
