const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
const db = require('./data/db');
const port = 5000;
const server = express();

server.listen(port, () => {
  console.log(`server listening on port ${port}`);
});

// let nextId = 2;

// let users = [
//   {
//     id: 1,
//     title: 'Enter Your Note',
//     content: 'Add Note Content'
//   },
// ];

// app.use(bodyParser.json());
// app.use(cors());

server.get('/api/users', (req, res) => {
  db.find()
    .then( users => {
      res.status(200).json({users})
    })
    .catch( err => {
      res.status(500).json({error: 'Problem receiving data'})
    })
});

server.get('/api/users/:id', (req, res) => {
  const userId = req.params.id;

  db.findById(userId)
    .then( user => {
      res.json({ user });
    })
    .catch( err => {
      res.status(500).json({ error: 'Problem receiving data'})
    })

});

// app.post('/api/notes', (req, res) => {
//   const note = { id: getNextId(), ...req.body };

//   notes = [...notes, note];

//   res.send(notes);
// });

// app.put('/api/notes/:id', (req, res) => {
//   const { id } = req.params;
//   const noteIndex = notes.findIndex(f => f.id == id);
//   if (noteIndex > -1) {
//     const note = { ...notes[noteIndex], ...req.body };
//     notes = [
//       ...notes.slice(0, noteIndex),
//       note,
//       ...notes.slice(noteIndex + 1),
//     ];
//     res.send(notes);
//   } else {
//     res.status(404).send({ msg: 'note not found' });
//   }
// });

// app.delete('/api/notes/:id', (req, res) => {
//   const { id } = req.params;
//   notes = notes.filter(f => f.id !== Number(id));
//   res.send(notes);
// });

// function getNextId() {
//   return nextId++;
// }

