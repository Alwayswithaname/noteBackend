const util = require('util');
const fs = require('fs');

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

const uniqid = require('uniqid');

class Save {
    read() {
        return readFileAsync('db/db.json', 'utf8'); 
    }

    write(note) {
        return writeFileAsync('db/db.json', JSON.stringify(note));
    }

    getNotes() {
        return this.read().then((notes) => {
            let parsedNotes;

            try {
                parsedNotes = [].concat(JSON.parse(notes));
            } catch (err) {
                parsedNotes = []
            }

            return parsedNotes;
        });
    }

    addNote(note) {
        const {title, text} = note;

        if (!title || !text) {
            throw new Error('Note title and text cannot be empty');
        }
    
        const newNote = { title, text, id: uniqid() };

        return this.getNotes()
            .then((notes) => [...notes, newNote])
            .then((changedNotes) => this.write(changedNotes))
            .then(() => newNote);
    }

    

}

module.exports = new Save();