import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { getStoredBookDetail } from "../utility/localstorage";


const ListedBook = () => {
    const books = useLoaderData();
    const [detailBooks, setDetailBooks] = useState([]);
    useEffect(() =>{
        const storedBookIds = getStoredBookDetail();
        if(books.length > 0){
            // const booksDetail = books.filter(book => storedBookIds.includes(book.bookId))
            const booksDetail = [];
            for(const bookId of storedBookIds){
                const book = books.find(book => book.bookId === bookId);
                if (book){
                    booksDetail.push(book)
                }
            }
setDetailBooks(booksDetail);
            // console.log(books, storedBookIds, booksDetail)
        }
    },[])

   
    

    return (
        <div>
            <div className="text-center">
            <h2 className="text-2xl">More List Book</h2>
            <div className="dropdown dropdown-end ">
  <div tabIndex={0} role="button" className="btn m-1 bg-green-500 text-[#FFFFFF] rounded-full ">Sort By</div>
  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
    <li><a>Item 1</a></li>
    <li><a>Item 2</a></li>
  </ul>
</div>
</div>


        <ul>
            {
                detailBooks.map(book => <li key={book.bookId}>
                    <span>{book.bookName} {book.review}</span>

                </li>)
            }
        </ul>

        </div>
    );
};

export default ListedBook;