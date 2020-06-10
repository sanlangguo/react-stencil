import React, { useContext } from 'react';
import { ColorContext } from './color';

function ShowArea() {
    const { color } = useContext(ColorContext);

    return (
        <div style={{color: color}}>
            我是展示的字体
        </div>
    );
}

export default ShowArea;