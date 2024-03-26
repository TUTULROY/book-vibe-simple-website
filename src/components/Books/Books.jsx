
import { useEffect, useState } from "react";
import Book from "../Book/Book";


const Books = () => {

const [books, setBook] = useState([]);

useEffect(() =>{

    fetch('book.json')
    .then(res => res.json())
    .then(data => setBook(data))

},[])

    return (
        <div>
        <div className="mt-5 mb-5">
            <h2 className="text-4xl text-center">Book</h2>
            </div>
            <div className="lg:grid grid-cols-3 gap-3">

            {
                books.map(book => <Book key={book.id} book={book}></Book>)
            }


            </div>
        </div>
       
    );
};

export default Books;