const http = require("http");
const app = require("./app");
const port = process.env.PORT || 3000; // Use default 3000 if PORT is not defined

app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => {
    console.log('Listening on Port ' + port);
});
