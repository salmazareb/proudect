const {createNewAuthor, getAllAuthors, getOneAuthor, editAuthor, deleteAuthor} = require("../controllers/authorControllers");


module.exports = app => {

    app.get('/api', getAllAuthors);
    app.get('/api/:id', getOneAuthor);
    app.put('/api/:id/edit', editAuthor);
    app.delete('/api/:id/delete', deleteAuthor);
    app.post('/api/new/author', createNewAuthor);
};
