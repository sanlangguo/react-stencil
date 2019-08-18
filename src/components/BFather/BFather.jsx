import React, { Component } from "react";

class BFather extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "this chid component",
            triggerFatherState:　"change father state value",
        };
        this.triggerFatherState = this.triggerFatherState.bind(this);
        this.childSelftToChange = this.childSelftToChange.bind(this);
    }

    componentDidMount() {
        console.log("react data");
    }

    /**
     * 触发父组件的状态更改state
     */
    triggerFatherState() {
        const { setSelfValue } = this.props;
        setSelfValue(this.state.triggerFatherState);
    }

     /**
     * stare 在子组件
     */
    childSelftToChange() {
        const { onChildToChange } = this.props;
        onChildToChange('来自子组件的修改state----');
    }


    render() {
        const { name } = this.state;
        const { msg } = this.props;
        return (
            <div className="home">
                <p>{name}</p>
                <p>{msg}</p>
                <button onClick={this.triggerFatherState}>触发父组件的状态更改state</button>
                <button onClick={this.childSelftToChange}>state 定义在 child 组件</button>
            </div>
        );
    }
}

export default BFather;
