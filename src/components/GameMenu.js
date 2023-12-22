// GameMenu.js
import React from 'react';
import { Sprite, Stage } from "@pixi/react";

const GameMenu = ({ startGame, options, quitGame, setGameStarted }) => {
    const handleStartGame = () => {
        setGameStarted(true); // Update the gameStarted state
        startGame(); // Trigger startGame function
    };

    return (
        <div>
            <button onClick={handleStartGame}>Start Game</button>
            <button onClick={options}>Options</button>
            <button onClick={quitGame}>Quit Game</button>
            <Stage width={window.innerWidth} height={window.innerHeight-100} options={{ backgroundColor: 0xffffff }}>
                <Sprite
                    x={window.innerWidth / 2}
                    y={window.innerHeight / 2}
                    anchor={0.5}
                    image="tecstures/Buttons/StartButton.bmp"
                    scale={{ x: 1, y: 1 }}
                    interactive={true}
                    pointerdown={handleStartGame}
                />
            </Stage>
        </div>
    );
};

export default GameMenu;
