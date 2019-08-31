import React, { Component } from 'react';

class Context extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: 'Context',
			father: 'this father msg',
			toChildMsg: 'to chid mgs default',
			selfChangeValue: '',
			childChangeValue: '',
		};
	}

	componentDidMount() {
		console.log('react data');
	}

	render() {
		return (
			<div className='Context'>
				<p>{this.state.name}</p>
			</div>
		);
	}
}

export default Context;
