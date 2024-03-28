import { saveBookDetail } from "../utility/localstorage";
import { CiLocationOn } from "react-icons/ci";
import { IoMdContacts, IoIosCopy } from "react-icons/io";
import { Link } from "react-router-dom";

const ReadBooks = ({book}) => {
    saveBookDetail();
    return (
        <div>
            <div className="card my-6 card-side max-w-6xl lg:h-72 bg-base-100 shadow-xl">
  <figure><img src={book.image} alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title">{book.bookName}</h2>
    <p>by: {book.author}</p>
    <div className="flex">
    <p className="mb-3"> <span className="text-xl font-bold">Tag</span>  <span className="mr-2 btn btn-ghost rounded-full text-green-500">#{book.tags[0]} </span>
     <span className="ml-2 btn btn-ghost rounded-full text-green-500">#{book.tags[1]}</span>
      </p>
     
      <CiLocationOn className="text-2xl" />
        <h2>  Year of Publishing: {book.yearOfPublishing}</h2> 
       
       
    </div>
    <div className="flex">
        <IoMdContacts className="text-xl" />
        <h2 className="mr-7">Publisher: {book.publisher} </h2>
        <IoIosCopy className="text-xl" /> 
        <h2>Page  {book.totalPages}</h2>

        </div>
        <hr />
    <div className="card-actions ">
        <button className="btn btn-outline btn-info rounded-full">Category: {book.category}</button>
        <button className="btn btn-outline btn-warning rounded-full">Rating {book.rating}</button>
      <Link to={`../book/${book.bookId}`}> 
      <button className="btn btn-success text-white rounded-full">View Details</button>
      </Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default ReadBooks;