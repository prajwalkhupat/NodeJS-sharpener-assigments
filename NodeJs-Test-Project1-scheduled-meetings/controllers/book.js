const Book=require('../models/book');




exports.postBookData=(req,res,next)=>{
       
    const returndate=req.body.returndate;
    const bookedtime=req.body.bookedtime;
    const bookname=req.body.bookname;
    const fine=req.body.fine;

    Book.create({
        bookname:bookname,
        bookedtime:bookedtime,
        returndate:returndate,
        fine:fine
    })
    .then(book=>{
        res.json(book);
    })


}


exports.getBookData=(req,res,next)=>{

    Book.findAll()
    .then(books=>{
        res.json(books)
    })
    .catch(err=>console.log(err))

}
exports.returnBook=(req,res,next)=>{
    let bookId=req.params.bookId;
    Book.findByPk(bookId)
    .then(book=>{
        console.log(book)
        book.destroy();
    })
}
