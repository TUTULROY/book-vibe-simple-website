import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { getStoredBookDetail } from "../utility/localstorage";
import ReadBooks from "../ReadBooks/ReadBooks";


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
    },[books])

   const [tabIndex, setTabIndex] = useState(0);

   const [displayBooks, setDisplayBooks] =useState([]);


   const handleBooksFilter = filter =>{
    if(filter === 'yearOfPublishing'){
        setDisplayBooks(detailBooks);
        displayBooks(detailBooks);
    }
    else if (filter === 'totalPages'){
        const pageNumber = detailBooks.filter(book => book.totalPages === 'totalPages')
        setDisplayBooks(pageNumber);
        displayBooks(detailBooks);
    }
    else if (filter === 'rating'){
        const Rating = detailBooks.filter(book => book.rating === 'rating');
        setDisplayBooks(Rating);
        displayBooks(detailBooks);
    }
}
    

    return (
        <div>
            <div className="text-center">
            <h2 className="text-4xl max-w-6xl font-bold">Book</h2>
            <div className="dropdown dropdown-end ">
  <div tabIndex={0} role="button" className="btn m-1 bg-green-500 text-[#FFFFFF] rounded-full ">Sort By</div>
  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
    <li onClick={() => handleBooksFilter('review')}><a>Publisher</a></li>
    <li onClick={() => handleBooksFilter('totalPage')}><a>PageNumber</a></li>
    <li onClick={() => handleBooksFilter('rating')}><a>Rating</a></li>
  </ul>
</div>
</div>
<div role="tablist" className="tabs tabs-lifted w-96 gap-7">
  <Link 
   to={''}
onClick={() => setTabIndex(0)}
  role="tab" className={`tab ${tabIndex === 0 ? 'tab-active' : 'tab'}`}>Read Book
  </Link>
  <Link to={'wishlist'}
  onClick={() => setTabIndex(1)}
  
  role="tab" className={`tab ${tabIndex === 1 ? 'tab-active' : 'tab'}`}>Wishlist Book</Link>
  
</div>

       <div className="my-6 py-5">
            {
                detailBooks.map(book => <ReadBooks key={book.bookId} book={book}></ReadBooks> )
            }
       </div>

        </div>
    );
};

export default ListedBook;