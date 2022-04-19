const express = require('express')
const router = express.Router()


const { addUser, getUsers, getUser, deleteUser } = require('../controllers/user')
const { addBook, getBooks, getBook, deleteBook, editBook } = require('../controllers/book')
const { addTransaction, getTransactions, getTransaction, editTransaction } = require('../controllers/transaction')
const { register, login, checkAuth } = require('../controllers/auth')
const { auth } = require('../middlewares/auth')
const { uploadFile } = require('../middlewares/upload')

router.post('/user', addUser)
router.get('/users', getUsers)
router.get('/user/:id', getUser)
router.delete('/user/:id', deleteUser)
router.post('/register', register)
router.post('/login', login)
router.post('/book', auth, uploadFile('bookFile'), addBook)
router.get('/books', getBooks)
router.get('/book/:id', getBook)
router.delete('/book/:id', auth, deleteBook)
router.patch('/book/:id', auth, editBook)
router.post('/transaction', auth, uploadFile('transferProof'), addTransaction)
router.get('/transactions', getTransactions)
router.get('/transaction/:id', getTransaction)
router.patch('/transaction/:id', editTransaction)
router.get("/check-auth", auth, checkAuth);


module.exports = router