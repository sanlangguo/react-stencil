import React, { useState , useEffect } from "react";

function test02() {
    const [count, setCount] = useState(0);
    const [age, setAge] = useState(0);

    // useEffect 第二个参数为当前依赖，依赖变化时，将再次渲染
    useEffect(() => {
        console.log(`${count} update`)
    }, [count])

    return (
        <div>
            <p>click {count} times</p>
            <button onClick={() => {setCount(count + 2)}}>hooks点击更改states</button>
        </div>
    );

}

export default test02;
