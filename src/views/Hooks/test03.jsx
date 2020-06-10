import React, { useState, createContext, useContext } from "react";
const countContext = createContext();

// 子组件
function CountChild () {
    const count = useContext(countContext);
    return (<h3>{count}</h3>)
}

// 父组件 （父 -> 子 传值）
function test03() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <p>click {count} times</p>
            <button onClick={() => {setCount(count + 2)}}>hooks点击更改states</button>
            <br/>
            <countContext.Provider value={count}>
                <CountChild />
            </countContext.Provider>
        </div>
    );

}

export default test03;
