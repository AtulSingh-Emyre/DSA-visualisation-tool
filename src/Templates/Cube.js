import React, { useState } from 'react';

const Cube = ({isTarget, isSouce, isWallSelection}) => {
    const [color, setColor] = useState('yellow');
    const [dim, setDim] = useState(10);
    const onDragOverHandler = (e) => {
        if(isWallSelection) {
            setColor('black');
        }
    }
    const onMouseEnterHandler = (e) => {
        console.log(e);
    }
    const onClickHandler = (e) => {
    }

    const onDragHandler = (e) => {
        if(isWallSelection) {
            setColor('black');
            setDim(10);
        }
    }
    const onDragEndHandler = (e) => {
        setDim(10);
    }

    return (
        <div draggable onDragOver={onDragOverHandler}
        onClick={onClickHandler}
        onDragEnd={onDragEndHandler}
        onMouseEnter={onMouseEnterHandler}
        onDrag={onDragHandler}
        style= {{backgroundColor: color, height: dim, width: dim}}>
        </div>
    );
}

export default Cube;
