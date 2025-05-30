
import { useState } from 'react';
import { GamepadIcon, Users, User, RotateCcw, Trophy } from 'lucide-react';

type Player = 'X' | 'O' | null;
type GameMode = 'single' | 'multi' | null;

const GamePage = () => {
  const [gameMode, setGameMode] = useState<GameMode>(null);
  const [board, setBoard] = useState<Player[]>(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState<Player>('X');
  const [winner, setWinner] = useState<Player | 'tie' | null>(null);
  const [scores, setScores] = useState({ X: 0, O: 0, ties: 0 });

  const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
    [0, 4, 8], [2, 4, 6] // diagonals
  ];

  const checkWinner = (newBoard: Player[]) => {
    for (const combination of winningCombinations) {
      const [a, b, c] = combination;
      if (newBoard[a] && newBoard[a] === newBoard[b] && newBoard[a] === newBoard[c]) {
        return newBoard[a];
      }
    }
    return newBoard.every(cell => cell !== null) ? 'tie' : null;
  };

  const makeMove = (index: number) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);

    const gameResult = checkWinner(newBoard);
    if (gameResult) {
      setWinner(gameResult);
      setScores(prev => ({
        ...prev,
        [gameResult === 'tie' ? 'ties' : gameResult]: prev[gameResult === 'tie' ? 'ties' : gameResult] + 1
      }));
    } else {
      if (gameMode === 'single' && currentPlayer === 'X') {
        // AI move
        setTimeout(() => makeAIMove(newBoard), 500);
      } else {
        setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
      }
    }
  };

  const makeAIMove = (currentBoard: Player[]) => {
    const availableMoves = currentBoard.map((cell, index) => cell === null ? index : null).filter(val => val !== null) as number[];
    
    if (availableMoves.length === 0) return;

    // Simple AI: try to win, then block, then random
    let aiMove = availableMoves[Math.floor(Math.random() * availableMoves.length)];

    // Try to win
    for (const move of availableMoves) {
      const testBoard = [...currentBoard];
      testBoard[move] = 'O';
      if (checkWinner(testBoard) === 'O') {
        aiMove = move;
        break;
      }
    }

    // Try to block
    for (const move of availableMoves) {
      const testBoard = [...currentBoard];
      testBoard[move] = 'X';
      if (checkWinner(testBoard) === 'X') {
        aiMove = move;
        break;
      }
    }

    const newBoard = [...currentBoard];
    newBoard[aiMove] = 'O';
    setBoard(newBoard);

    const gameResult = checkWinner(newBoard);
    if (gameResult) {
      setWinner(gameResult);
      setScores(prev => ({
        ...prev,
        [gameResult === 'tie' ? 'ties' : gameResult]: prev[gameResult === 'tie' ? 'ties' : gameResult] + 1
      }));
    } else {
      setCurrentPlayer('X');
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setCurrentPlayer('X');
    setWinner(null);
  };

  const resetAll = () => {
    resetGame();
    setGameMode(null);
    setScores({ X: 0, O: 0, ties: 0 });
  };

  if (!gameMode) {
    return (
      <div className="h-full flex items-center justify-center animate-fade-in">
        <div className="text-center space-y-6 md:space-y-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#ff9900] to-[#017020] bg-clip-text text-transparent mb-4">
              Game Center
            </h2>
            <p className="text-gray-600 text-lg">Choose your game mode</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-2xl">
            <button
              onClick={() => setGameMode('single')}
              className="group p-6 md:p-8 bg-white rounded-2xl border-2 border-gray-200 hover:border-[#ff9900] transition-all duration-300 hover:scale-105"
            >
              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-[#ff9900] to-[#e6870a] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <User className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-800">Single Player</h3>
                <p className="text-gray-600">Play against AI</p>
              </div>
            </button>

            <button
              onClick={() => setGameMode('multi')}
              className="group p-6 md:p-8 bg-white rounded-2xl border-2 border-gray-200 hover:border-[#017020] transition-all duration-300 hover:scale-105"
            >
              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-[#017020] to-[#014a1a] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Users className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-800">Two Players</h3>
                <p className="text-gray-600">Play with a friend</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full space-y-4 md:space-y-6 overflow-y-auto animate-fade-in">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#ff9900] to-[#017020] bg-clip-text text-transparent mb-2">
          Tic Tac Toe
        </h2>
        <p className="text-gray-600 text-sm md:text-base">
          {gameMode === 'single' ? 'You vs AI' : 'Player vs Player'}
        </p>
      </div>

      <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Game Controls */}
        <div className="space-y-4">
          <div className="bg-white p-4 md:p-6 rounded-xl border border-gray-200">
            <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
              <GamepadIcon className="text-[#ff9900]" size={20} />
              Game Status
            </h3>
            
            {!winner ? (
              <div className="text-center">
                <p className="text-gray-600 mb-2">Current Turn</p>
                <div className="text-2xl font-bold text-[#017020]">
                  Player {currentPlayer}
                  {gameMode === 'single' && currentPlayer === 'O' && ' (AI)'}
                </div>
              </div>
            ) : (
              <div className="text-center">
                <Trophy className="w-8 h-8 mx-auto text-[#ff9900] mb-2" />
                <p className="text-lg font-bold text-[#017020]">
                  {winner === 'tie' ? "It's a Tie!" : `Player ${winner} Wins!`}
                </p>
              </div>
            )}
          </div>

          {/* Scoreboard */}
          <div className="bg-white p-4 md:p-6 rounded-xl border border-gray-200">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Scoreboard</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Player X:</span>
                <span className="font-bold">{scores.X}</span>
              </div>
              <div className="flex justify-between">
                <span>Player O:</span>
                <span className="font-bold">{scores.O}</span>
              </div>
              <div className="flex justify-between">
                <span>Ties:</span>
                <span className="font-bold">{scores.ties}</span>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="space-y-2">
            <button
              onClick={resetGame}
              className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-[#017020] text-white rounded-lg hover:bg-[#014a1a] transition-colors"
            >
              <RotateCcw size={16} />
              <span>New Game</span>
            </button>
            <button
              onClick={resetAll}
              className="w-full px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
            >
              Change Mode
            </button>
          </div>
        </div>

        {/* Game Board */}
        <div className="lg:col-span-2 flex items-center justify-center">
          <div className="bg-white p-4 md:p-8 rounded-xl border border-gray-200 w-full max-w-md">
            <div className="grid grid-cols-3 gap-2 md:gap-3 aspect-square">
              {board.map((cell, index) => (
                <button
                  key={index}
                  onClick={() => makeMove(index)}
                  className="aspect-square bg-gray-100 border-2 border-gray-300 rounded-lg text-2xl md:text-4xl font-bold hover:bg-gray-200 transition-colors disabled:cursor-not-allowed flex items-center justify-center"
                  disabled={!!cell || !!winner}
                >
                  <span className={cell === 'X' ? 'text-[#ff9900]' : 'text-[#017020]'}>
                    {cell}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamePage;
