const express = require('express');
const app = express();
const mongoose = require('mongoose');
const wallRoutes = require('./routes/wall.js');
const tagsRoutes = require('./routes/tags.js');
const otherRoutes = require('./routes/other.js')
const port = 3000;

mongoose.connect('mongodb://localhost:27017/twallDB', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    })
    .then(() => {
        console.log('database connected');
    })
    .catch((e) => {
        console.log(`ERORR!!!  ${e}`);
    })

app.use('/static', express.static('public'));
app.set('view engine', 'ejs');
app.set('views', `${__dirname}/views`);
app.use(express.urlencoded({
    extended: true
}));

//routes
app.use('/wall', wallRoutes);
app.use('/tags', tagsRoutes);
app.use('/', otherRoutes); //TODO: add /about and 404 page

app.listen(port, () => {
    console.log(`Serving app on localhost:${port}`)
})