import memoize from 'memoize-one'

export const cellPositions = memoize(props => {
    let {
        count: [countX, countY],
        size: [width, height],
        start: [startX, startY]
    } = props;
    let array = [];
    for(let x = 0; x <= countX; x++){
        for(let y = 0; y <= countY; y++){
            const newPos = {
                width, height,
                x: startX + (width + 5) * x,
                y: startY + (height + 5) * y,
                cellKey: `${x}-${y}`
            }
            array.push(newPos);
        }
    }
    return array;
})