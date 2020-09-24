const net = require("net");
const connect = function() {
  const conn = net.createConnection({

  
    host: "135.23.222.131",
    port: 50542,
    password: "675053",
  

  });
  
  conn.setEncoding("utf8");

  conn.on('connect', () => {
    console.log(`Incomming: You're connected`);
    conn.write('Name: DSM');
    //conn.write("Move: up")
  });

  conn.on('data', (data) => {
    console.log(`Incomming: ${data}`);
  });

  return conn;
};

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


// if (key === 'w') {
//       conn.write('Move: up');
//     } else if (key === 's') {
//       conn.write('Move: down');
//     } else if (key === 'd') {
//       conn.write('Move: right')
//     } else if (key === 'a') {
//       conn.write('Move: left')
//     }


module.exports = { connect, setupInput };
