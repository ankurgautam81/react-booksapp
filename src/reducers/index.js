import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';

const rootreducer= combineReducers({
	books: BooksReducer,
	ActiveBook:ActiveBook

});
export default rootreducer;