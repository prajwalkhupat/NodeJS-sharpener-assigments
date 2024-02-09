
const express=require('express')
 
const BookController=require('../controllers/book');

const routes=express.Router();

routes.get('/getbookdata', BookController.getBookData)
routes.post('/postbookdata',BookController.postBookData)
routes.delete('/return-book/:bookId',BookController.returnBook)



module.exports=routes;
