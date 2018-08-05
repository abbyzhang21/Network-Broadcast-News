const net = require("net");

const clients = [];

const server = net.createServer(client => {
  client.write("Aloha, clients!");
  client.on("data", data => {
    const msg = data.toString();
    if (msg.includes("/help")) {
      client.write("Here are some commands: /name - register name");
    } else if (msg.includes("/name")) {
      const splitIt = msg.split(" ");
      client.name = splitIt[1];
      console.log("test", client.name);
      console.log("wow", client.name);
    } else {
      clients.forEach(socket => {
        if (client !== socket) {
          let test = client.name + ":" + data.toString();
          socket.write(test);
        }
      });
    }
    // console.log(msg);
    // client.name = msg;

    // console.log(client.name);

    console.log(client.name + ":" + msg);
    process.stdin.pipe(client);
  });
  client.on("END", data => {
    console.log("client disconnected");
  });
  clients.push(client);
});

server.listen(6969, () => {
  console.log("Server listening on port 6969");
});
