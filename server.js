const express = require('express');
const app = express();

app.use(express.static(_dirname + '/dist'));
app.get('/', function (req, res) {
    res.sendFile(_dirname + '/dist/index.html')
});
let server = app.listen(8888, function () {
    console.log("App server is running on port 8888");
});
// http://localhost:8888/ 
// http://localhost:1234/ 
// npm run start