var createBenchmark = require('../benchmark');

var suite = createBenchmark('Arrow functions');

function plain(x) {
  return function(y) {
    return x + y;
  };
}

function withBind(x) {
  return function(y) {
    return x + y;
  }.bind(this);
}

function withArrow(x) {
  return (y) => x + y;
}

suite.add('Plain Function', function() {
  plain(1)(2);
});

suite.add('Bound Function', function() {
  withBind(1)(2);
});

suite.add('Arrow Function', function() {
  withArrow(1)(2);
});

suite.run();
