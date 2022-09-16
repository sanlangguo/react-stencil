import React, { useState, useEffect } from 'react';
import Context from '../../components/Context/Context'
import './index.css'


function Child() {
    console.log('Child');
    useEffect(() => {
        console.log('Child22');
    }, [])
    return <div>Child</div>;
  }

function Father(props) {
    const [num, setNum] = React.useState(0);
    useEffect(() => {
        console.log('Child11');
    }, [])
    return (
      <div onClick={() => {setNum(num + 1)}}>
        {num}
        {props.children}
      </div>
    ); 
}

export default function Home2 () {
    useEffect(() => {
        console.log('Home2');
    }, [])
  return (
    <Father>
        <Child/>
    </Father>
  );
}

