const path = require('path');
const fs = require('fs');

module.exports = (app) => {

    // rout takes user to home page
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/notes.html'));
    });
   
    // notes return the notes.html file
    app.get('/notes', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/notes.html'));
    });

    // get * should return the index.html/homepage
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
};