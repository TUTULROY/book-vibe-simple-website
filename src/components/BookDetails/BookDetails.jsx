import { Link, useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveBookDetail } from "../utility/localstorage";



const BookDetails = () => {
        const books = useLoaderData();
        const {bookId} = useParams()
        const idInt = parseInt(bookId);
        const book = books.find(book => book.bookId === idInt);
       
const handleAddToRead = () =>{
    saveBookDetail(idInt)
    toast('you added successful')
}
const handleAddToWishList = () =>{
    saveBookDetail(idInt)
    toast('you added successful')
}
    
    return (
        <div>
            
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img  src={book.image} className="max-w-sm rounded-lg shadow-2xl mr-6" />
    <div>
      <h1 className="text-5xl font-bold mb-3">{book.bookName}</h1>
      <p className="mb-2">by:{book.author}</p>
      <hr />
      <p className="mt-2 mb-2">{book.category}</p>
      <hr />
      <p className="py-6">{book.review}</p>
      <p className="mb-3"> <span className="text-xl font-bold">Tag</span>  <span className="mr-2 btn btn-ghost rounded-full text-green-500">#{book.tags[0]} </span>
     <span className="ml-2 btn btn-ghost rounded-full text-green-500">#{book.tags[1]}</span>
      </p>
      
      <hr />

      <div className="mb-4">
      

     
       <div className="flex gap-40 my-4">
        <h2>Number of Pages:</h2>
        <h2 className="font-extrabold">{book.totalPages}</h2>
       </div>
      
        <div className="flex gap-52 my-4">
        <h2>Publisher:</h2>
        <h2 className="font-extrabold">{book.publisher}</h2>

        </div>
        <div className="flex flex gap-40 my-4">
        <h2>Year of Publishing:</h2> <h2 className="font-extrabold">{book.yearOfPublishing}</h2>
        </div>
        <div className="flex gap-64 my-4">

      <h2>Rating:</h2>  <h2 className="font-extrabold"> {book.rating}</h2>
      </div>
      
      </div>
      

      <div>
        <Link onClick={handleAddToRead}  className="mr-3 btn btn-active btn-ghost">Read Me</Link>
        <Link onClick={handleAddToWishList}  className="btn btn-accent">Wishlist</Link>
      </div>
    </div>
  </div>
</div>
<ToastContainer />
        </div>
    );
};

export default BookDetails;