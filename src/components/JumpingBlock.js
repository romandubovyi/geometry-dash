// JumpingBlock.js
import React, { useEffect, useState } from 'react';
import { Graphics, Sprite, Stage } from "@pixi/react";
import '@pixi/events';

const JumpingBlock = () => {
    const [jumping, setJumping] = useState(false);
    const [positionY, setPositionY] = useState(486); // Initial Y position
    const [blockX, setBlockX] = useState(800);
    const blockSize = 50; // Adjust block size as needed
    const jumpHeight = 150; // Adjust jump height as needed
    const jumpDuration = 500; // Adjust jump duration as needed (in milliseconds)
    const moveSpeed = 10; // Adjust moving block speed

    useEffect(() => {
        const moveInterval = setInterval(() => {
            setBlockX((prevX) => (prevX > -50 ? prevX - moveSpeed : 800)); // Move block from right to left
        }, 1000 / 60); // Update approximately 60 times per second

        return () => clearInterval(moveInterval);
    }, []);

    const handleJump = () => {
        if (!jumping) {
            setJumping(true);
            let jumpStart = Date.now();

            const jumpInterval = setInterval(() => {
                const timePassed = Date.now() - jumpStart;
                const progress = Math.min(timePassed / jumpDuration, 1);

                const jumpValue = -jumpHeight * Math.sin((progress * Math.PI) / 2);
                setPositionY(500 + jumpValue);

                if (progress >= 1) {
                    clearInterval(jumpInterval);
                    setJumping(false);
                    setPositionY(500); // Reset to the initial Y position
                }
            }, 1000 / 60); // Update approximately 60 times per second
        }
    };
    const handleClick = (event) => {
        console.log('Sprite clicked!', event);
        // Add your logic here for handling the sprite click event
    };

    return (
        <Stage width={800} height={600} options={{ backgroundColor: 0xffffff }} onClick={handleJump}>
            <Sprite x={10} y={positionY} image="images/cube.png" scale={{x: 0.5, y: 0.5}} interactive={true} pointerdown={handleClick}/>
            <Graphics
                draw={(g) => {
                    // Draw moving block (triangle)
                    g.clear();
                    g.beginFill(0x00FF00); // Green color
                    g.moveTo(blockX, 500);
                    g.lineTo(blockX + 50, 550);
                    g.lineTo(blockX - 50, 550);
                    g.lineTo(blockX, 500);
                    g.endFill();
                }}
            />
        </Stage>
    );
};

export default JumpingBlock;
