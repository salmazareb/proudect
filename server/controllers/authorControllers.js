const Author = require('../models/authorModels')
const createNewAuthor = (req, res) => {
    const {name}= req.body
    Author.create({name})
      .then(newAuthor => res.json({ author: newAuthor }))
      .catch(err => res.status(400).json({ message: "Something went wrong", error: err }));
  };
  const getAllAuthors = (req, res) => {
    Author.find()
      .then(allAuthors => res.json({ authors: allAuthors }))
      .catch(err => res.json({ message: "Something went wrong", error: err }));
  };
  const getOneAuthor = (req, res) => {
    Author.findOne({ _id: req.params.id })
      .then(oneAuthor => res.json({ author: oneAuthor }))
      .catch(err => res.json({ message: "Something went wrong", error: err }));
  };
  const editAuthor = (req, res) => {
    Author.findOneAndUpdate({ _id: req.params.id }, req.body,{ runValidators: true })
      .then(oneAuthor => res.json({ author: oneAuthor }))
      .catch(err => res.status(400).json({ message: "Something went wrong", error: err }));
  };

  const deleteAuthor = (req, res) => {
    Author.deleteOne({ _id: req.params.id })
      .then(oneAuthor => res.json({ author: oneAuthor }))
      .catch(err => res.json({ message: "Something went wrong", error: err }));
  };

module.exports={createNewAuthor, getAllAuthors, getOneAuthor, editAuthor, deleteAuthor}