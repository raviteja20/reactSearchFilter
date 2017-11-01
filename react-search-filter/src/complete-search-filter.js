import React from 'react';
import SearchAndCheck from './search-and-check.js';
import FilteredList from './filtered-list.js';

export default class CompleteSearchFilter extends React.Component{
	constructor(props){
		super(props);
		this.state={
			searchTerm:'',
			isChecked:false
		};
		this.handleSearchTermChange = this.handleSearchTermChange.bind(this);
		this.handleStockedOnly = this.handleStockedOnly.bind(this);
	}

	handleSearchTermChange(searchTerm){
		this.setState({searchTerm:searchTerm});
	}

	handleStockedOnly(isChecked){
		this.setState({isChecked:isChecked});
	}

	render(){
		let isChecked=true;
		return(
			<div>
				<SearchAndCheck searchTerm={this.setState.searchTerm} isChecked={this.state.isChecked} handleSearchTermChange={this.handleSearchTermChange} handleStockedOnly={this.handleStockedOnly}/> 
				<FilteredList searchTerm={this.state.searchTerm} isChecked={this.state.isChecked} data={this.props.data}/>
			</div>
		);
	}
}