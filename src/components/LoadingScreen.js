// LoadingScreen.js
import React from 'react';
import { Sprite, Stage, Text } from '@pixi/react';

const LoadingScreen = () => {
    return (
        <Stage width={window.innerWidth} height={window.innerHeight} options={{ backgroundColor: 0xffffff }}>
            <Sprite 
                x={window.innerWidth / 2}
                y={window.innerHeight / 2}
                anchor={0.5}
                image="tecstures/text/GeometryAdvansed.bmp"
                scale={{x: 1, y: 1}}
            />
             <Text
                text="Loading..."
                anchor={0.5}
                x={window.innerWidth / 2}
                y={window.innerHeight / 2 + 100}
                style={{ fontFamily: 'Arial', fontSize: 24 }}
            />
        </Stage>
    );
};

export default LoadingScreen;
