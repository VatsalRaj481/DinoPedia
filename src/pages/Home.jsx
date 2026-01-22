import { useEffect, useState } from "react";
import { getAllDinos } from "../services/dinoApi";
import DinoCard from "../components/DinoCard";

function Home() {
  const [randomDino, setRandomDino] = useState(null);

  const pickRandomDino = (data) => {
    const index = Math.floor(Math.random() * data.length);
    setRandomDino(data[index]);
  };

  useEffect(() => {
    getAllDinos().then(pickRandomDino);
  }, []);

  return (
    <div className="page">
      <h1>🦖 Welcome to Dinopedia</h1>
      <p>Your encyclopedia of dinosaurs</p>

      {randomDino && <DinoCard dino={randomDino} />}

      <button onClick={() => getAllDinos().then(pickRandomDino)}>
        🔄 Get Another Dino
      </button>
    </div>
  );
}

export default Home;
