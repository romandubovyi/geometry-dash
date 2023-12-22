// YourPixiComponent.js
import { useEffect } from 'react';
import * as PIXI from 'pixi.js';

const YourPixiComponent = () => {
    useEffect(() => {
        // Create a PixiJS application
        const app = new PIXI.Application({ width: 800, height: 600 });
        document.body.appendChild(app.view);

        // Create a player character sprite (block)
        const player = new PIXI.Graphics();
        player.beginFill('red');
        player.drawRect(0, 0, 50, 50); // Adjust size as needed
        player.endFill();
        player.x = 100;
        player.y = app.renderer.height / 2;
        app.stage.addChild(player);

        console.log('Player:', player);

        // Function to handle jump when the mouse is clicked
        const jump = () => {
            // Apply vertical velocity to simulate jump
            player.vy = -10; // Adjust the value as needed for jump height
        };

        // Handle mouse click events
        app.renderer.view.addEventListener('mousedown', jump);

        // Game loop to handle physics (e.g., gravity)
        app.ticker.add(() => {
            // Apply gravity (adjust this value to control the speed of falling)
            player.vy += 0.5;

            // Apply vertical velocity to player's position
            player.y += player.vy;

            // Prevent the player from going below the screen
            if (player.y > app.renderer.height - player.height) {
                player.y = app.renderer.height - player.height;
                player.vy = 0;
            }
        });

        return () => {
            app.renderer.view.removeEventListener('mousedown', jump);
            app.destroy(true);
        };
    }, []);

    return null;
};

export default YourPixiComponent;
