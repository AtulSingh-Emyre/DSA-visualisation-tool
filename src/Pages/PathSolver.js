/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
// import Cube from '../Templates/Cube';

const applicationStates = {
    wallSelection: 'wall-selection-state',
    sourceSelection: 'source-selection-state',
    destSelection: 'destination-selection-state'
}

//toggles one item or sets value if defined
const toggleItem = (items, [row, col, value]) =>
  items.map((r, rowIndex) =>
    rowIndex !== row
      ? r
      : r.map((c, colIndex) =>
          colIndex !== col
            ? c
            : value
        )
  );

const Pathsolver = () => {
    const[grid, setGrid] = useState([[]]);
    const[selectionCase, setSelectionCase] = useState(applicationStates.wallSelection);
    useEffect(() => {
        initializeGrid(25,60);
        console.log('onLoad',grid);
    }, []);

    const initializeGrid = (R,C) => {
        let g = [];
        for(var r=0;r<R;r++) {
            let row = [];
            for(let c=0;c<C;c++) {
                row.push('yellow');
            }
            g.push(row);
        }
        setGrid(g);
    }

    const onAddGridWall = React.useCallback((row, col) => {
        setGrid(grid => toggleItem(grid, [row, col, 'black']));
      }, []);
    
    const onAddSourceButtonClick = (e) => {
        if(selectionCase !== applicationStates.sourceSelection) setSelectionCase(applicationStates.sourceSelection);
    }
    const onAddDestButtonClick = (e) => {
        if(selectionCase !== applicationStates.destSelection) setSelectionCase(applicationStates.destSelection);
    }
    const onAddWallsButtonClick = (e) => {
        if(selectionCase !== applicationStates.wallSelection) setSelectionCase(applicationStates.wallSelection);
    }


    

    const onDragOverElementHandler = (e,R,C) => {
        if(selectionCase === applicationStates.wallSelection)
        onAddGridWall(R,C);
    }
    const onClickElementHandler = (e,R,C) => {
        if(selectionCase === applicationStates.wallSelection)
        onAddGridWall(R,C);
    }

    return (
        <div>
            <div style={{backgroundColor:'darkgreen', color:'white', display:'flex', flexDirection:'row',justifyContent:'space-evenly'}}>
                <div style={{borderRight:2, borderColor:'white'}} onClick={onAddSourceButtonClick}>Mark Start</div>
                <div onClick={onAddDestButtonClick}>Mark End</div>
                <div onClick={onAddWallsButtonClick}>Mark Walls</div>
            </div>
            <div style={{margin:'auto', marginTop:30}}>
            {
               grid.map((row, r) => {
                   console.log(row);
                   return <div style={{display:'flex', flexDirection:'row', justifyContent:'center'}}>
                   {row.map((val,c) => {
                           return (<div onClick={(e) => {onClickElementHandler(e,r,c);}}
                           draggable
                           onDragOver={(e) => {onDragOverElementHandler(e,r,c);}}
                           style={{backgroundColor:grid[r][c], height: 20, width: 20}}
                           >
                               {/* <Cube isWallSelection={selectionCase==='walls'} isSouce={selectionCase==='source'} isTarget={selectionCase==='target'} /> */}
                            </div>)
                       })}
                    </div>
               })
            }
            </div>
        </div>
    );
}

export default Pathsolver;
