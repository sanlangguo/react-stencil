import React, { useState, useEffect } from 'react';
import Context from '../../components/Context/Context'
import './index.css'
// import './index.scss'

export default function Home2 (props) {
  const [count, setCount] = useState(0);
  // 没有副作用
  useEffect(() => {
    console.log(count)
  }, [count]);

  // 有副作用
  useEffect(() => {
    function test(value) {
      console.log(value)
    }
    test(2);
    return () => {
      test(1);
    }
  })

  return (
    <div className='home'>
      <p onClick={() => setCount(count+1)}>time --> {count}</p>
    </div>
  );
}

