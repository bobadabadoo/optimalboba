import React, { useState } from 'react';
import './App.css';
import BobaRanking from './BobaRanking';
import Counter from './Counter';

function App() {
  const [bobaPlaces, setBobaPlaces] = useState([
    { name: "Boba Junkie", location: "1200 W Warner Ave b, Santa Ana, CA 92707", rating: 9.2, tier: "S TIER", rank: 1 },
    { name: "Simple Boba and Tea", location: "2188 E Lincoln Ave, Anaheim, CA 92806", rating: 8.3, tier: "A TIER", rank: 2 },
    { name: "bobaTEAque", location: "1960 N Tustin St, Orange, CA 92865", rating: 6.6, tier: "B TIER", rank: 3 },
    { name: "Kawaii Boba Teahouse Fullerton", location: "1327 S Harbor Blvd, Fullerton, CA 92832", rating: 6.4, tier: "B TIER", rank: 4 },
    { name: "One Zo", location: "13861 Brookhurst St #9, Garden Grove, CA 92843", rating: 6.1, tier: "B TIER", rank: 5 },
  ]);

  function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  const [views, setViews] = useState(getRandomArbitrary(14000,15000));

  const handleRankChange = (newRank, oldRank) => {
    const updatedBobaPlaces = bobaPlaces.map((bobaPlace) => {
      if (bobaPlace.rank === oldRank) {
        return { ...bobaPlace, rank: newRank };
      } else if (bobaPlace.rank > oldRank && bobaPlace.rank <= newRank) {
        return { ...bobaPlace, rank: bobaPlace.rank - 1 };
      } else if (bobaPlace.rank < oldRank && bobaPlace.rank >= newRank) {
        return { ...bobaPlace, rank: bobaPlace.rank + 1 };
      } else {
        return bobaPlace;
      }
    });
    setBobaPlaces(updatedBobaPlaces);
  };

  return (
    <div className="App">
      <Counter startCounter={views} />
      <header className="App-header">
        <h1>O P T I M A L  B O B A</h1>
      </header>
      <div className="App-body">
        <BobaRanking bobaPlaces={bobaPlaces} handleRankChange={handleRankChange} />
      </div>
      <div className="App-footer">
        <p>© 2023 Optimal Boba Inc. by Joshua Cho</p>
      </div>
    </div>
  );
}

export default App;
