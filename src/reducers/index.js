import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';

const rootreducer= combineReducers({
	books: BooksReducer

});
export default rootreducer;