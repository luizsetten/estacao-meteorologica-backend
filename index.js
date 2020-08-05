const express = require('express');
const routes = require('./routes');

const app = express();

app.use(routes); //express.urlencoded({ extended: true })

// app.get('/', (req, res) => {
//   res.send('Hello wardo');
// });

app.listen(3000);