import React, {useEffect, useState} from 'react';
import './App.css';
import BoardComponent from './components/BoardComponent';
import { Board } from './models/Board';


function App() {
  const [board, setBoard] = useState(new Board());

  useEffect(() => {
    restart();
  }, [])
  

  function restart() {
    const board = new Board();
    board.initCells();
    setBoard(board);
  }
  return (
    <div className='app'>
        <BoardComponent 
          board={board} 
          setBoard={setBoard}
        />
    </div>
  );
}

export default App;
