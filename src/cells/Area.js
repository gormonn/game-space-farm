import React, {useState} from 'react'
import { cellPositions } from './utils'
import Cell from './Cell'

const Area = props => {
    const [areaOfCells] = useState(cellPositions(props));
    const [cellIsHover, hoverCell] = useState(null);
    const [cellIsSelect, selectCell] = useState(null);

    return areaOfCells.map(({cellKey, ...params}) => {
        const isHover = (cellIsHover === cellKey) ? true : false;
        const isSelect = (cellIsSelect === cellKey) ? true : false;
        return (
            <Cell
                {...{...params}}
                key={cellKey}
                interactive={true}
                isHover={isHover}
                isSelect={isSelect}
                pointertap={() => selectCell(cellKey)}
                mouseover={() => hoverCell(cellKey)}
                mouseout={() => hoverCell(null)}
            />
        )}
    )
}

export default Area