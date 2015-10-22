#!/usr/bin/env node
'use strict';
var fs = require('fs');
var path = require('path');
var execFileSync = require('child_process').execFileSync;
var program = require('commander');
var pkg = require('../package.json');

program.version(pkg.version);

var benchmarksPath = path.join(__dirname, 'benchmarks');
function runBenchmark(filename) {
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
}

var benchmarks = fs.readdirSync(benchmarksPath);
program
  .command('all')
  .action(function() {
    benchmarks.forEach(runBenchmark);
  });

benchmarks.forEach(function(filename) {
  var command = program.command(filename.replace(/\.js$/, ''));
  command.action(function() {
    runBenchmark(filename);
  });
});

program.parse(process.argv);

if (!program.args.length) {
  program.help();
}
