import React from 'react';

export default class EachDataRow extends React.Component{
	render() {
		let product = this.props.product;
		let name= product.stocked ? product.name : <span style={{color:'red'}}>{product.name}</span> 
		return (
			<tr>
				<td>{name}</td>
				<td>{product.price}</td>
			</tr>
		);
	}
}