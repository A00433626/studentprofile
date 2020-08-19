import React, { Component } from 'react';
import './DropDown.css';
import { Button } from 'reactstrap';

class DropDown extends Component {
	state = {
		tag: [],
		active: false,
		tagvalue: '',
	};

	render() {
		const { student, tag: tags } = this.props;
		return (
			<div className='dropdown_data'>
				<div className='percentage_details'>
					{student.grades.map((data, index) => {
						return (
							<span key={index} style={{ display: 'block' }}>
								{`Test ${index + 1} \u00A0
							${data}%`}
							</span>
						);
					})}

					{tags &&
						tags.map((item, item_index) => {
							return (
								item.id === student.id && (
									<div className='add-button' key={item_index}>
										{item.tags.map((tag, index) => {
											return (
												<Button
													key={index}
													className='add-tag-button'
													style={{ margin: '3px' }}
												>
													{tag}
												</Button>
											);
										})}
									</div>
								)
							);
						})}

					<div className='add-tag-input-filed'>
						<input
							type='text'
							className='form-control add-tag-input'
							// value='Add a Tag'
							placeholder='Add a Tag'
							id={student.id}
							onChange={this.props.handleChange}
							onKeyPress={this.props.handleKeyPress}
						/>
					</div>
				</div>
			</div>
		);
	}
}
export default DropDown;
