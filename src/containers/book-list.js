import React , {Component} from 'react';
import { connect } from 'react-redux';
import {selectBook} from '../actions/index';
import {bindActionCreators} from 'redux';

class BookList extends Component{

	renderList(){
		return this.props.books.map((book)=>{
			return(

				<li key={book.title} onClick={()=>this.props.selectBook(book)} className="list-group-item">{book.title}</li>
			);
		});
	}
	render(){
		return(
			<ul className="list-group col-sm-4">
				{this.renderList()}
			</ul>
		);
	}
}

function mapStateToProps(state){
	return{
		// this function helps to connect redux to react. it saves component state and return props to component
		books:state.books

	};

}

//anything returns fromthis function will ends up as props
//on the BookList container
function mapDispatchToProps(dispatch){
	//whenevr selectBook is called, result should be pass to all reducers
	return bindActionCreators({selectBook:selectBook},dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);