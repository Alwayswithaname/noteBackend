const router = require('express').Router();
const save = require('../db/save');
const fs = require('fs');


const uniqid = require('uniqid');



    router.get('/notes', (req, res) =>  {
        save 
            .getNotes()
            .then((notes) => {
                return res.json(notes);
            })
            .catch((err) => res.status(500).json(err));
        //res.sendFile(path.join(__dirname, '../db/db.json'));
    });


    router.post('/notes', (req, res) => {
        save 
            .addNote(req.body)
            .then((note) => res.json(note))
            .catch((err) => res.status(500).json(err))
        // let db = fs.readFileSync('db/db.json');
        // db = JSON.parse(db);
        // res.json(db);
``

    let userNote = {
        title: req.body.title,
        text: req.body.text,
        id: uniqid(),
    };

    db.push(userNote);
    fs.writeFileSync('db/db.json', JSON.stringify(db));
    })

    module.exports = router;