const net = require("net");

const client = net.createConnection(6969, () => {
  // client.write("HELLO IM HERE");
  client.on("data", data => {
    console.log(data.toString());
  });
  process.stdin.pipe(client);
});
