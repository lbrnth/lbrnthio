const express = require('express');
const path = require('path');
const hbs = require('hbs');

const app = express();
const publicDirectoryPath = path.join(__dirname, './public');
const viewsPath = path.join(__dirname, './templates/views');
const componentsPath = path.join(__dirname, './templates/components');

app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(componentsPath);

app.get('', (req, res) => {
    res.render('index')
});

app.listen(3000, () => {
    console.log('server is listening on port 3000');
});