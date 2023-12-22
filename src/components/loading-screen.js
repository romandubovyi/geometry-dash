// LoadingScreen.js
import React from 'react';
import { Stage, Text } from '@pixi/react';

const LoadingScreen = () => {
    return (
        <Stage width={window.innerWidth} height={window.innerHeight}>
            <Text
                text="Loading..."
                anchor={0.5}
                x={window.innerWidth / 2}
                y={window.innerHeight / 2}
                style={{ fontFamily: 'Arial', fontSize: 24, fill: 'white' }}
            />
        </Stage>
    );
};

export default LoadingScreen;
