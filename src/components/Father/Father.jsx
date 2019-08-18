import React, { Component } from 'react';
import Child from '../Child/Child';
import { runInThisContext } from 'vm';

class Father extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: 'father',
			father: 'this father msg',
			toChildMsg: 'to chid mgs default',
			selfChangeValue: '',
			childChangeValue: '',
		};
		this.setSelfValue = this.setSelfValue.bind(this);
		this.childToChange = this.childToChange.bind(this);
	}

	componentDidMount() {
		console.log('react data');
	}

	/**
	 * state在父组件
	 */
	setSelfValue(data) {
		this.setState({
			selfChangeValue: data,
		});
	}

	/**
	 * state在子组件
	 */
	childToChange(data) {
		this.setState({
			childChangeValue: data,
		});
	}

	render() {
		const { toChildMsg, childChangeValue } = this.state;
		return (
			<div className='father'>
				<p>{this.state.name}</p>
				{/* <Child msg={toChildMsg} /> */}
				<p>触发父组件的状态进行更改</p>
				<div>我是parent, Value是：{this.state.selfChangeValue}</div>
				<Child msg={toChildMsg} setSelfValue={this.setSelfValue} onChildToChange={this.childToChange}/>
				<p>子父组件的状态进行更改</p>
				<p>{childChangeValue}</p>
				{/* <Child msg={toChildMsg} onChildToChange={this.childToChange} /> */}
			</div>
		);
	}
}

export default Father;
