import React, { useReducer } from "react";

// 父组件 （父 -> 子 传值）
function test04() {
    const [count, dispatch]= useReducer((state,action) => {
        switch (action) {
            case 'add': 
                return state+1; 
            case 'sub': 
                return state-1; 
            default:
                return state;
        }
    }, 0);

    return (
        <div>
            <p>click {count} times</p>
            <button onClick={() => {dispatch('add')}}>useReducer ++ </button>
            <button onClick={() => {dispatch('sub')}}>useReducer -- </button>
            <button onClick={() => {dispatch()}}>useReducer</button>
            <br/>
        </div>
    );

}

export default test04;
