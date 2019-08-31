import React, { useState } from "react";

function test01() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>click {count} times</p>
            <button onClick={() => {setCount(count + 2)}}></button>
        </div>
    );

}

export default test01;

