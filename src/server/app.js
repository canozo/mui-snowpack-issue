const express = require('express');
const morgan = require('morgan');
const path = require('path');
const app = express();

app.use(morgan('dev'));
app.use(express.json());

app.use(express.static(path.join(__dirname, `../../build`)));

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}`));
