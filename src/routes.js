const { 
  getNoteHandler,
  addNoteHandler,
  getNoteByIdHandler,
  editNoteByIdHandler,
  deleteNoteByIdHandler
} = require('./handler');

const routes = [
  {
    method: 'GET',
    path: '/notes',
    handler: () => getNoteHandler,
  },
  {
    method: 'POST',
    path: '/notes',
    handler: () => addNoteHandler,
  },
  {
    method: 'GET',
    path: '/notes/{id}',
    handler: () => getNoteByIdHandler,
  },
  {
    method: 'PUT',
    path: '/notes/{id}',
    handler: editNoteByIdHandler,
  },
  {
    method: 'DELETE',
    path: '/notes/{id}',
    handler: () => deleteNoteByIdHandler,
  },
];


module.exports = routes;