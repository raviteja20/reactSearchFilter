import React from 'react';

export default class Categories extends React.Component{
	render(){
		return(
				<tr>
					<th colSpan="2">{this.props.categoryName}</th>					
				</tr>				
			);
	}
}