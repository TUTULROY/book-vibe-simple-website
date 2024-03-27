const getStoredBookDetail = () =>{
    const storedBookDetail = localStorage.getItem('book-read');

    if(storedBookDetail){
        return JSON.parse(storedBookDetail);
    }
    return [];
}


const saveBookDetail = id =>{

    const storedBookDetails = getStoredBookDetail();
    const exists = storedBookDetails.find(bookId => bookId === id);
    if(!exists){
        storedBookDetails.push(id);
        localStorage.setItem('book-read', JSON.stringify(storedBookDetails));
    }

}

export {getStoredBookDetail, saveBookDetail}