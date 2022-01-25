import React, { useEffect, useState } from 'react';
import Cube from '../Templates/Cube';

const Pathsolver = () => {
    const[grid, setGrid] = useState([[]]);
    const[selectionCase, setSelectionCase] = useState('walls');
    useEffect(() => {
        initializeGrid(50,120);
        console.log('onLoad',grid);
    }, []);
    const initializeGrid = (R,C) => {
        var g = [];
        for(var r=0;r<R;r++) {
            var row = [];
            for(var c=0;c<C;c++) {
                row.push('yellow');
            }
            g.push(row);
        }
        setGrid(g);
    }

    const onAddGridWall = (R,C) => {
        var g = grid;
        g[R][C] = 'black';
        setGrid(g);
    }


    return (
        <div>
            <div style={{backgroundColor:'darkgreen', color:'white', display:'flex', flexDirection:'row',justifyContent:'space-evenly'}}>
                <div style={{borderRight:2, borderColor:'white'}}>Mark Start</div>
                <div>Mark End</div>
                <div>Mark Walls</div>
            </div>
            <div style={{margin:'auto', marginTop:30}}>
            {
               grid.map((row, r) => {
                   console.log(row);
                   return <div style={{display:'flex', flexDirection:'row', justifyContent:'center'}}>
                   {row.map((val,c) => {
                           return (<div onDragOver={(e) => {
                                onAddGridWall(r,c);
                                // console.log('drag entered',r,c);
                           }}>
                               <Cube isWallSelection={selectionCase==='walls'} isSouce={selectionCase==='source'} isTarget={selectionCase==='target'} />
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
