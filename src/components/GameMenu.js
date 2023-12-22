// GameMenu.js
import React from 'react';

const GameMenu = ({ startGame, options, quitGame, setGameStarted }) => {
    const handleStartGame = () => {
        setGameStarted(true); // Update the gameStarted state
        startGame(); // Trigger startGame function
    };

    return (
        <div className="menu">
            <h2>Game Menu</h2>
            <button onClick={handleStartGame}>Start Game</button>
            <button onClick={options}>Options</button>
            <button onClick={quitGame}>Quit Game</button>
        </div>
    );
};

export default GameMenu;
