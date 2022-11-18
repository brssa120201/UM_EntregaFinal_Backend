const Book = require('../models/books');

//Metodo para agregar un libro
const addBook = (req, res) => {
    const book = new Book();
    const { titulo_libro, autor, editorial, cant_paginas, genero } = req.body;

    book.titulo_libro = titulo_libro;
    book.autor = autor;
    book.editorial = editorial;
    book.cant_paginas = cant_paginas;
    book.genero = genero;

    book.save((err, bookStored) => {
        if(err){
            res.status(500).send({message: "El libro ya existe"})
        }else {
            if(!bookStored){
                res.status(404).send({message: "Error al crear la mascota"})
            }else {
                res.status(200).send({book: bookStored, message: "Libro creado exitosamente"})
            }
        }
    })
}

//Metodo para consultar todos los libros
const getBook = (req, res) => {
    Book.find().then((books) => {
      !books
        ? res.status(404).send({ message: "No se han encontrado libros" })
        : res.status(200).send({ books });
    });
  };

async function updateBook(req, res){
    let bookData = req.body;
    bookData.titulo_libro = req.body.titulo_libro;
    const params = req.params

    Book.findByIdAndUpdate({_id:params.id}, bookData,(err, petUpdate)=>{
        err
        ?res.status(500).send({message:"Error del servidor"})
        : !petUpdate
        ? res.status(404).send({message:"No se encontro el libro"})
        : res.status(200).send({message:"Libro actualizado"})
    })
}

//Metodo para eliminar un libro
const deleteBook = (req, res) => {
    const { id } = req.params;
  
    Book.findByIdAndRemove(id, (err, bookDeleted) => {
      err
        ? res.status(500).send({ message: "Error del servidor." })
        : !bookDeleted
        ? res.status(404).send({ message: "Libro no encontrado." })
        : res
            .status(200)
            .send({ message: "El libro a sido eliminado exitosamente." });
    });
  };

module.exports = {
    addBook,
    getBook,
    updateBook,
    deleteBook
}