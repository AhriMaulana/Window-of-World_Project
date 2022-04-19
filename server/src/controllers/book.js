const { book } = require('../../models')

exports.addBook = async (req, res) => {

    try {
        const {...data} = req.body
        const createdBook = await book.create({
            ...data,
            bookFile: req.file.filename
        })

        res.send({
            status: "success",
            data: {
                book: createdBook
            }
        })
    } catch (error) {
        console.log(error);
        res.status(200).send({
            status: "Failed",
            message: "Server error"
        })
    }
}

exports.getBooks = async (req, res) => {

    try {
        const books = await book.findAll({
            attributes: {
                exclude: ['createdAt', 'updatedAt']
            }
        })

        res.send({
            status: 'success',
            data: {
                book : books
            }
        })
    } catch (error) {
        console.log(error)
        res.send({
            status: 'failed',
            message: 'Server Error'
        })
    }
}


exports.getBook = async (req, res) => {

    try {
        const { id } = req.params

        const getdata = await book.findOne({
            where: {
                id: id
            },
            attributes: {
                exclude: ['createdAt', 'updatedAt']
            }
        })

        res.send({
            status: 'success',
            data: {
                book : getdata
            }
        })

    } catch (error) {
        console.log(error)
        res.send({
            status: 'failed',
            message: 'Server Error'
        })
    }
}


exports.deleteBook = async (req, res) => {

    try {
        const { id } = req.params

        await book.destroy({
            where: {
                id
            }
        })

        res.send({
            status: 'success',
            data: {
                id: id
            }
        })
    } catch (error) {
        console.log(error)
        res.send({
            status: 'failed',
            message: 'Server Error'
        })
    }
}

exports.editBook = async (req, res) => {
    try {
        const { id } = req.params;
        const newData = req.body

        await book.update(newData, {
            where: {
                id,
            },
        });

        const update = await book.findOne({
            where: {
                id: id
            },
            attributes: {
                exclude: ['createdAt', 'updatedAt']
            }
        })


        res.send({
            status: "success",
            data: {
                book : update
            }
        });
    } catch (error) {
        console.log(error);
        res.send({
            status: "failed",
            message: "Server Error",
        });
    }
};