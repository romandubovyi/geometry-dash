// JumpingBlock.js
import React, { useState } from 'react';
import { Graphics, Sprite, Stage } from "@pixi/react";

const JumpingBlock = () => {
    const [jumping, setJumping] = useState(false);
    const [positionY, setPositionY] = useState(300); // Initial Y position
    const blockSize = 50; // Adjust block size as needed
    const jumpHeight = 150; // Adjust jump height as needed
    const jumpDuration = 1000; // Adjust jump duration as needed (in milliseconds)

    const handleJump = () => {
        if (!jumping) {
            setJumping(true);
            let jumpStart = Date.now();

            const jumpInterval = setInterval(() => {
                const timePassed = Date.now() - jumpStart;
                const progress = Math.min(timePassed / jumpDuration, 1);

                const jumpValue = -jumpHeight * Math.sin((progress * Math.PI) / 2);
                setPositionY(300 + jumpValue);

                if (progress >= 1) {
                    clearInterval(jumpInterval);
                    setJumping(false);
                    setPositionY(300); // Reset to the initial Y position
                }
            }, 1000 / 60); // Update approximately 60 times per second
        }
    };
    const handleClick = (event) => {
        console.log('Sprite clicked!', event);
        // Add your logic here for handling the sprite click event
    };

    return (
        <Stage width={800} height={600} options={{ backgroundColor: 0x1099bb }} onClick={handleJump}>
            {/*<Graphics*/}
            {/*    draw={g => {*/}
            {/*        g.clear();*/}
            {/*        g.beginFill(0x000000); // Red color*/}
            {/*        g.drawRect(0, 0, blockSize, blockSize); // Adjust size as needed*/}
            {/*        g.endFill();*/}
            {/*    }}*/}
            {/*    x={50} // Center the square horizontally*/}
            {/*    y={positionY}*/}
            {/*/>*/}
            <Sprite x={10} y={positionY} image="images/cube.png" scale={{x: 0.5, y: 0.5}} interactive={true} pointerdown={handleClick}/>
        </Stage>
    );
};

export default JumpingBlock;
