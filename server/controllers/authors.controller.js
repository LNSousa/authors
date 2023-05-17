const Author = require('../models/authors.model')

module.exports.createAuthor = (req, res) => {
    Author.create(req.body)
    .then((newAuthor) => res.json({results: newAuthor}))
    .catch((err) => res.json(err))
}

module.exports.allAuthors = (req, res) => {
    Author.find()
    .then((authors) => res.json({results: authors}))
    .catch((err) => res.json(err))
}

module.exports.getAuthor = (req, res) => {
    Author.findById({_id: req.params.id})
    .then((author) => res.json({results: author}))
    .catch((err) => res.json(err))
}

module.exports.updateAuthor = (req, res) => {
    Author.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
    .then((updatedAuthor) => res.json({results: updatedAuthor}))
    .catch((err) => res.json(err))
}

module.exports.deleteAuthor = (req, res) => {
    Author.deleteOne({_id: req.params.id})
    .then((deletedAuthor) => res.json({results: deletedAuthor}))
    .catch((err) => res.json(err))
}