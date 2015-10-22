var Suite = require('benchmark').Suite;

function log(message) {
  console.log('  ' + message);
}

function createBenchmark(name) {
  var suite = new Suite(name, {
    onStart: function onStart(event) {
      console.log('Benchmarking %s...\n', name);
    },
    onCycle: function onCycle(event) {
      console.log('  %s', event.target);
    },
    onComplete: function onComplete(event) {
      console.log('\nFastest is %s', this.filter('fastest').pluck('name'));
    }
  });

  return suite;
}

module.exports = createBenchmark;
