const path = require('path');
const router = require('express').Router();

    // rout takes user to home page
    router.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/notes.html'));
    });
   
    // notes return the notes.html file
    router.get('/notes', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/notes.html'));
    });

    // get * should return the index.html/homepage
    router.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    module.exports = router;