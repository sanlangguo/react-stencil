import React, { useState } from "react";

function test01() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>click {count} times</p>
            <button onClick={() => {setCount(count + 2)}}>hooks点击更改states</button>
        </div>
    );

}

export default test01;

