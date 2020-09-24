const { connect } = require("./client");
const {  setupInput } = require("./input");

console.log("Conneting ... ");
const conn = connect();
setupInput(conn);






