const { IP, PORT } = require('./constants');

const net = require("net");
const connect = function() {
  const conn = net.createConnection({

  
    host: IP,
    port: PORT,
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





module.exports = { connect };
