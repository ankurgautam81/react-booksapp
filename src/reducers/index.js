import { combineReducers } from 'redux';
import BooksReducer from './reducer_book';

const rootreducer= combineReducers({
	books: BooksReducer

});
export default rootreducer;