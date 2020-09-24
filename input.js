let connection;



const handleUserInput = function(key) {
  
  // \u0003 maps to ctrl+c input
  if (key === '\u0003') {
    process.exit();
  } else if (key === 'w') {
    connection.write('Move: up');
  } else if (key === 's') {
    connection.write('Move: down');
  } else if (key === 'd') {
    connection.write('Move: right');
  } else if (key === 'a') {
    connection.write('Move: left');
  }  else if (key === 'f') {
    connection.write("Say: I am Batman");
  }
  process.stdout.write('.');
};

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', (key) => handleUserInput(key));

  console.log('after callback');
  return stdin;
};



module.exports = { setupInput };