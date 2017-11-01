import React from 'react';

export default class SearchAndCheck extends React.Component{

	onChange = (e) => {this.props.handleSearchTermChange(e.target.value)};

	onCheckChange = (e) => {this.props.handleStockedOnly(e.target.checked)};

	render(){
		return(
			<form>
				<input type="search" autoComplete="on" value={this.props.searchTerm} onChange={this.onChange}/> <br />
				<input type="checkbox" checked={this.props.isChecked} onChange={this.onCheckChange}/><p>Only show products in stock</p>
			</form>
		);
	}
}
