
import { useEffect, useState } from "react";
import BookDetail from "../BookDetail/BookDetail";


const BookDetails = () => {
const [books, setBooks] = useState([]);
useEffect(() =>{

        fetch('book.json')
        .then(res => res.json())
        .then(data => setBooks(data));

}, [])



    return (
        <div>
            <h2 className="text-6xl text-center font-extraBold mt-6 mb-8">Book</h2>

            <div className="grid grid-cols-3">
                {
                books.map(book =><BookDetail key={book.id} book={book}></BookDetail>)
            }
            </div>
        </div>
     
    );
};

export default BookDetails;