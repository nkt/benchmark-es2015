'use strict';
var createBenchmark = require('../benchmark');

var suite = createBenchmark('Classes');

function FunctionClass() {}
FunctionClass.prototype.foo = function() {};

class ESClass {
  foo() {}
}

suite.add('ES5 classs', function() {
  var obj = new FunctionClass();
  obj.foo();
});

suite.add('ES2015 class', function() {
  var obj = new ESClass();
  obj.foo();
});

suite.run();
