export function selectBook(book){
	// selectBook is an ActionCreator , it needs to return an actoion, an object with a property
	return{
		type:'BOOK_SELECTED',
		payload:book
	};
}