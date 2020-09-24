const handleUserInput = function(key) {
  
  // \u0003 maps to ctrl+c input
  if (key === '\u0003') {
    process.exit();
  }
  process.stdout.write('.');
};

const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', (key) => handleUserInput(key));

  console.log('after callback');
  return stdin;
};

module.exports = { setupInput };