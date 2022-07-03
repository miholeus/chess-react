import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figure, FigureNames } from "./Figure";

import blackLogo from "../../assets/black-king.png";
import whiteLogo from "../../assets/white-king.png";

export class King extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
    this.name = FigureNames.KING;
  }

  canMove(target: Cell): boolean {
    if (!super.canMove(target)) {
      return false;
    }
    if (target.x === this.cell.x && target.y === this.cell.y) {
      return false;
    }
    // console.log('target.x', target.x)
    // console.log('this.cell.x', this.cell.x);
    
    const dx = Math.abs(this.cell.x - target.x);
    const dy = Math.abs(this.cell.y - target.y);
    // console.log("figure", this.cell.board.getCell(dx, dy).figure?.name);

    // if (this.cell.board.getCell(dx, dy).figure?.canMove(target)) {
    //   return false;
    // }

    return ((dx === 0 || dx === 1) && dy === 1) || (dx === 1 && (dy === 0 || dy === 1));
  }
}
