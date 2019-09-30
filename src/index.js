const express = require('express');
const cors = require('cors');
const app = express();
const routes = require('./Routes');
const http = require('http').Server(app);

app.set('port', 5000);
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
routes.init(app);

http.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});