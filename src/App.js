import './App.css';
import LoadingScreen from "./components/LoadingScreen";
import { useEffect, useState } from "react";
import GameMenu from "./components/GameMenu";
import JumpingBlock from "./components/JumpingBlock";

function App() {
  const [loading, setLoading] = useState(true);
  const [gameStarted, setGameStarted] = useState(false);
  const [showMenu, setShowMenu] = useState(false); // Initially, don't show the menu

  useEffect(() => {
    // Simulate loading time before displaying the menu (adjust as needed)
    setTimeout(() => {
      setLoading(false); // Set loading to false after the loading time
      setShowMenu(true); // Show the menu after loading is complete
    }, 2000); // Change this timeout duration as needed
  }, []); // Empty dependency array to run this effect only once (on component mount)


  const startGame = () => {
    setGameStarted(true); // Set gameStarted to true when the game starts
    setShowMenu(false); // Hide the menu when the game starts
  };

  const quitGame = () => {
    setGameStarted(false);
    setShowMenu(true); // Show the menu when the game quits
  };

  const options = () => {
    // Logic to show options menu
    // Implement functionality as needed
    console.log('Options clicked');
  };

  const goToMenu = () => {
    setGameStarted(false);
    setShowMenu(true);
  };

  return (
      <div>
        {loading ? (
            <LoadingScreen />
        ) : showMenu ? (
            <GameMenu startGame={startGame} options={options} quitGame={quitGame} setGameStarted={setGameStarted}/>
        ) : (
            <JumpingBlock />
        )}
      </div>
  );
}

export default App;
