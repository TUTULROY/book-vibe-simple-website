import { IoStarOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Book = ({book}) => {
    const {bookId, bookName, author, image, tags, category, rating} = book;
    return (
        <Link to={`/book/${bookId}`}>
        <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={image} alt="" /></figure>

  <div className="card-body">
    <div className="flex gap-5 text-green-500">
        <h2 >{tags[0]}</h2>
        <h2>{tags[1]}</h2>
        </div>
    <h2 className="text-2xl">{bookName}</h2>
    <p>by:{author}</p>
    <hr />
    <div className="">
      <div className="flex justify-between">
        <h2>{category}</h2>
        <h2 className="flex gap-2 ">{rating} <IoStarOutline className="text-xl"></IoStarOutline> </h2>
        
      </div>
      
    </div>
  </div>
</div>
</Link>
    );
};

export default Book;