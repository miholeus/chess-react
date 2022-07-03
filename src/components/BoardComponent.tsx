import React, { FC, useState } from 'react'
import { Board } from '../models/Board';
import CellComponent from './CellComponent';
import { Cell } from '../models/Cell';
import { useEffect } from 'react';


interface BoardProps {
    board: Board,
    setBoard: (board: Board) => void;
}

const BoardComponent: FC<BoardProps> = ({board, setBoard}) => {
  const [selectedCell, setSelectedCell] = useState<Cell | null>();

  function click(cell: Cell) {
    if (selectedCell && selectedCell !== cell && selectedCell.figure?.canMove(cell)) {
      selectedCell.moveFigure(cell);
      setSelectedCell(null);
    } else if (cell.figure) {
      setSelectedCell(cell);
    }
  }

  useEffect(() => {
    highlightCells();
  }, [selectedCell]);

  function highlightCells() {
    if (selectedCell !== undefined) {
      board.highlightCells(selectedCell);
    }
    updateBoard();
  }

  function updateBoard() {
    const newBoard = board.getCopyBoard();
    setBoard(newBoard);
  }

  return (
    <div className='board'>
        {board.cells.map((row, index) =>
            <React.Fragment key={index}>
                {row.map((cell, index) => 
                    <CellComponent 
                    key={cell.id} 
                    cell={cell} 
                    selected={cell.x === selectedCell?.x && cell.y === selectedCell?.y}
                    click={click}
                    />
                )}
            </React.Fragment>
         )}
    </div>
  )
}

export default BoardComponent