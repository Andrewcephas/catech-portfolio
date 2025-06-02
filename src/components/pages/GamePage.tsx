
import { useState, useEffect, useCallback } from 'react';
import { GamepadIcon, RotateCcw, Trophy, Play, Pause } from 'lucide-react';

type Direction = 'UP' | 'DOWN' | 'LEFT' | 'RIGHT';
type Position = { x: number; y: number };

const GamePage = () => {
  const GRID_SIZE = 20;
  const CANVAS_SIZE = 400;
  
  const [snake, setSnake] = useState<Position[]>([{ x: 10, y: 10 }]);
  const [food, setFood] = useState<Position>({ x: 15, y: 15 });
  const [direction, setDirection] = useState<Direction>('RIGHT');
  const [gameRunning, setGameRunning] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [speed, setSpeed] = useState(150);

  // Generate random food position
  const generateFood = useCallback(() => {
    const newFood = {
      x: Math.floor(Math.random() * GRID_SIZE),
      y: Math.floor(Math.random() * GRID_SIZE),
    };
    setFood(newFood);
  }, []);

  // Check collision with walls or self
  const checkCollision = useCallback((head: Position, snakeBody: Position[]) => {
    if (head.x < 0 || head.x >= GRID_SIZE || head.y < 0 || head.y >= GRID_SIZE) {
      return true;
    }
    return snakeBody.some(segment => segment.x === head.x && segment.y === head.y);
  }, []);

  // Move snake
  const moveSnake = useCallback(() => {
    if (!gameRunning || gameOver) return;

    setSnake(currentSnake => {
      const head = { ...currentSnake[0] };
      
      switch (direction) {
        case 'UP':
          head.y -= 1;
          break;
        case 'DOWN':
          head.y += 1;
          break;
        case 'LEFT':
          head.x -= 1;
          break;
        case 'RIGHT':
          head.x += 1;
          break;
      }

      const newSnake = [head, ...currentSnake];

      // Check collision
      if (checkCollision(head, currentSnake)) {
        setGameOver(true);
        setGameRunning(false);
        if (score > highScore) {
          setHighScore(score);
        }
        return currentSnake;
      }

      // Check if food is eaten
      if (head.x === food.x && head.y === food.y) {
        setScore(prev => prev + 10);
        generateFood();
        // Increase speed slightly
        setSpeed(prev => Math.max(100, prev - 2));
        return newSnake;
      }

      // Remove tail if no food eaten
      newSnake.pop();
      return newSnake;
    });
  }, [direction, food, gameRunning, gameOver, score, highScore, checkCollision, generateFood]);

  // Game loop
  useEffect(() => {
    const gameInterval = setInterval(moveSnake, speed);
    return () => clearInterval(gameInterval);
  }, [moveSnake, speed]);

  // Handle keyboard input
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!gameRunning) return;

      switch (e.key) {
        case 'ArrowUp':
        case 'w':
        case 'W':
          if (direction !== 'DOWN') setDirection('UP');
          break;
        case 'ArrowDown':
        case 's':
        case 'S':
          if (direction !== 'UP') setDirection('DOWN');
          break;
        case 'ArrowLeft':
        case 'a':
        case 'A':
          if (direction !== 'RIGHT') setDirection('LEFT');
          break;
        case 'ArrowRight':
        case 'd':
        case 'D':
          if (direction !== 'LEFT') setDirection('RIGHT');
          break;
        case ' ':
          e.preventDefault();
          toggleGame();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [direction, gameRunning]);

  const startGame = () => {
    setSnake([{ x: 10, y: 10 }]);
    setDirection('RIGHT');
    setScore(0);
    setSpeed(150);
    setGameOver(false);
    setGameRunning(true);
    generateFood();
  };

  const toggleGame = () => {
    setGameRunning(prev => !prev);
  };

  const resetGame = () => {
    setGameRunning(false);
    setGameOver(false);
    setSnake([{ x: 10, y: 10 }]);
    setDirection('RIGHT');
    setScore(0);
    setSpeed(150);
    generateFood();
  };

  return (
    <div className="h-full space-y-4 md:space-y-6 overflow-y-auto animate-fade-in">
      {/* Header */}
      <div className="text-center">
        <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#ff9900] to-[#017020] bg-clip-text text-transparent mb-2">
          Snake Game
        </h2>
        <p className="text-gray-600 text-sm md:text-base">
          Use arrow keys or WASD to control the snake
        </p>
      </div>

      <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Game Controls */}
        <div className="space-y-4">
          <div className="bg-white p-4 md:p-6 rounded-xl border border-gray-200 shadow-lg">
            <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
              <GamepadIcon className="text-[#ff9900]" size={20} />
              Game Status
            </h3>
            
            {gameOver ? (
              <div className="text-center">
                <Trophy className="w-8 h-8 mx-auto text-red-500 mb-2" />
                <p className="text-lg font-bold text-red-600 mb-2">Game Over!</p>
                <p className="text-gray-600">Final Score: {score}</p>
              </div>
            ) : (
              <div className="text-center">
                <p className="text-gray-600 mb-2">Current Score</p>
                <div className="text-3xl font-bold text-[#017020] mb-4">{score}</div>
                <div className="flex items-center justify-center gap-2">
                  {gameRunning ? (
                    <Pause className="w-5 h-5 text-[#ff9900]" />
                  ) : (
                    <Play className="w-5 h-5 text-[#017020]" />
                  )}
                  <span className="text-sm text-gray-600">
                    {gameRunning ? 'Playing' : 'Paused'}
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Scoreboard */}
          <div className="bg-white p-4 md:p-6 rounded-xl border border-gray-200 shadow-lg">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Statistics</h3>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span>Current Score:</span>
                <span className="font-bold text-[#017020]">{score}</span>
              </div>
              <div className="flex justify-between">
                <span>High Score:</span>
                <span className="font-bold text-[#ff9900]">{highScore}</span>
              </div>
              <div className="flex justify-between">
                <span>Snake Length:</span>
                <span className="font-bold">{snake.length}</span>
              </div>
              <div className="flex justify-between">
                <span>Speed Level:</span>
                <span className="font-bold">{Math.floor((150 - speed) / 10) + 1}</span>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="space-y-2">
            {!gameRunning && !gameOver && (
              <button
                onClick={startGame}
                className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-[#017020] text-white rounded-lg hover:bg-[#014a1a] transition-colors"
              >
                <Play size={16} />
                <span>Start Game</span>
              </button>
            )}
            
            {gameRunning && (
              <button
                onClick={toggleGame}
                className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-[#ff9900] text-white rounded-lg hover:bg-[#e6870a] transition-colors"
              >
                <Pause size={16} />
                <span>Pause Game</span>
              </button>
            )}
            
            <button
              onClick={resetGame}
              className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
            >
              <RotateCcw size={16} />
              <span>Reset</span>
            </button>
          </div>

          {/* Instructions */}
          <div className="bg-gradient-to-r from-[#ff9900]/10 to-[#017020]/10 p-4 rounded-lg border border-[#ff9900]/20">
            <h4 className="font-bold text-gray-800 mb-2">How to Play:</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• Use arrow keys or WASD to move</li>
              <li>• Eat red food to grow and score</li>
              <li>• Avoid walls and your own tail</li>
              <li>• Press Space to pause/resume</li>
              <li>• Speed increases as you score!</li>
            </ul>
          </div>
        </div>

        {/* Game Board */}
        <div className="lg:col-span-2 flex items-center justify-center">
          <div className="bg-white p-4 md:p-8 rounded-xl border border-gray-200 shadow-lg">
            <div 
              className="relative bg-gray-900 border-4 border-[#017020] rounded-lg overflow-hidden"
              style={{ width: CANVAS_SIZE, height: CANVAS_SIZE }}
            >
              {/* Grid */}
              <div className="absolute inset-0 grid grid-cols-20 grid-rows-20 gap-0">
                {Array.from({ length: GRID_SIZE * GRID_SIZE }).map((_, index) => {
                  const x = index % GRID_SIZE;
                  const y = Math.floor(index / GRID_SIZE);
                  
                  // Check if this cell contains snake
                  const isSnakeHead = snake[0]?.x === x && snake[0]?.y === y;
                  const isSnakeBody = snake.slice(1).some(segment => segment.x === x && segment.y === y);
                  const isFood = food.x === x && food.y === y;
                  
                  let cellClass = "w-full h-full border border-gray-800";
                  
                  if (isSnakeHead) {
                    cellClass += " bg-[#ff9900] animate-pulse";
                  } else if (isSnakeBody) {
                    cellClass += " bg-[#017020]";
                  } else if (isFood) {
                    cellClass += " bg-red-500 animate-bounce";
                  }
                  
                  return (
                    <div
                      key={index}
                      className={cellClass}
                      style={{
                        width: CANVAS_SIZE / GRID_SIZE + 'px',
                        height: CANVAS_SIZE / GRID_SIZE + 'px'
                      }}
                    />
                  );
                })}
              </div>
              
              {/* Game Over Overlay */}
              {gameOver && (
                <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Trophy className="w-12 h-12 mx-auto mb-4 text-yellow-400" />
                    <h3 className="text-2xl font-bold mb-2">Game Over!</h3>
                    <p className="text-lg mb-4">Score: {score}</p>
                    {score === highScore && score > 0 && (
                      <p className="text-yellow-400 font-bold mb-4">New High Score!</p>
                    )}
                    <button
                      onClick={startGame}
                      className="px-6 py-2 bg-[#017020] text-white rounded-lg hover:bg-[#014a1a] transition-colors"
                    >
                      Play Again
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamePage;
