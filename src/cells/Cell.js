import { Graphics } from 'pixi.js';
import { PixiComponent, applyDefaultProps } from '@inlet/react-pixi';
import { CELL_WIDTH, CELL_HEIGHT, CELL_FILL } from './const';

const DrawCell = ({ g, isHover = false, isSelect = false }) => {
  const opacity = isHover ? .5 : 1;
  g.clear();
  g.beginFill(CELL_FILL, opacity);
  isSelect && g.lineStyle(2, 0xFFFFFF);
  g.drawRect(0, 0, CELL_WIDTH, CELL_HEIGHT);
  g.endFill();
}

const Cell = PixiComponent('Cell', {
  create: props => {
    const { x, y } = props;
    const g = new Graphics();
    g.x = x;
    g.y = y;
    
    DrawCell({g});
    return g;
  },
  applyProps: (g, oldProps, newProps) => {
    if(oldProps !== {}){
      const hoverIsChanged = oldProps.isHover !== newProps.isHover;
      const selectIsChanged = oldProps.isSelect !== newProps.isSelect;
      if(hoverIsChanged || selectIsChanged){
        DrawCell({ g, ...newProps });
      }
    }
    applyDefaultProps(g, oldProps, newProps);
  }
});

export default Cell