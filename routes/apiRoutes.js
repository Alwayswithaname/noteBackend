const router = require('express').Router();
const save = require('../db/save');
const fs = require('fs');





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

        // code i tryed using from a guid that didnt end up working 
    // let userNote = {
    //     title: req.body.title,
    //     text: req.body.text,
    //     id: uniqid(),
    // };

    // db.push(userNote);
    // fs.writeFileSync('db/db.json', JSON.stringify(db));
    })

    router.delete('/notes/:id', (req, res) => {
        let db = JSON.parse(fs.readFileSync('db/db.json'))

        let deleteNotes = db.filter(item => item.id !== req.params.id);

        fs.writeFileSync('db/db.json', JSON.stringify(deleteNotes));
        res.json(deleteNotes);
    });

    module.exports = router;