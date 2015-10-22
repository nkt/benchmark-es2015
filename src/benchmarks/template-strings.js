'use strict';
var createBenchmark = require('../benchmark');

var suite = createBenchmark('Template Strings');

function helloConcat(name) {
  return 'Hello, ' + name;
}

function helloTemplate(name) {
  return `Hello, ${name}`;
}

function noop(arg) {
  arg;
}

suite.add('Concat', function() {
  noop(helloConcat('name'));
});

suite.add('Template', function() {
  noop(helloTemplate('name'));
});

suite.run();
