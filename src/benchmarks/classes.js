'use strict';
var createBenchmark = require('../benchmark');

var suite = createBenchmark('Classes');

var FunctionClass = (function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function FunctionClass() {
    _classCallCheck(this, FunctionClass);
  }

  FunctionClass.prototype.foo = function foo() {};

  return FunctionClass;
})();

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
