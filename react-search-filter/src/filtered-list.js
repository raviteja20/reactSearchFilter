import React from 'react';
import Categories from './categories.js';
import EachDataRow from './each-data-row';

export default class FilteredList extends React.Component{
	render(){
		let rows = [];
		let lastCategory='';
		this.props.data.map((dataElement) => {
			if(!dataElement.name.includes(this.props.searchTerm))
			{
				return;
			}

			if(this.props.isChecked && !dataElement.stocked)
			{
				return;
			}

			if(dataElement.category !== lastCategory)
			{
				rows.push(<Categories categoryName={dataElement.category} key={dataElement.category}/>);
			}
			rows.push(<EachDataRow product={dataElement} key={dataElement.name}/>);
			lastCategory = dataElement.category;
		});

		return(
			<table>
				<thead>
					<tr>
						<th>Name</th>
						<th>price</th>
					</tr>
				</thead>
				<tbody>{rows}</tbody>
			</table>
		);
	}	
}