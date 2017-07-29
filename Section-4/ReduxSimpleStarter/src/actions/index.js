// contains all action creators
export function selectBook(book) {
    // selectBookis an action creator - returns an action
    // console.log(`A book has been selected: ${book.title}`);
    return {
        type: 'BOOK_SELECTED',
        payload: book
    }
}
