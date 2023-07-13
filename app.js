const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')

const bookRouter = require('./routes/booking');
const sequelize = require('./util/database');

const app = express();


app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/booking', bookRouter)


sequelize.sync().then((res) => {

}).catch(err => console.log(err))




app.listen(8000);