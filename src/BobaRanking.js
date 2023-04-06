import React from 'react';
import './BobaRanking.css';

const BobaRanking = ({ bobaPlaces, handleRankChange }) => {
  return (
    <div className="BobaRanking-container">
      <table className="BobaRanking">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Location</th>
            <th>Rating</th>
            <th>Tier</th>
          </tr>
        </thead>
        <tbody>
          {bobaPlaces.map((bobaPlace) => (
            <tr key={bobaPlace.rank} onClick={() => handleRankChange(bobaPlace.rank)}>
              <td className="BobaRanking-cell BobaRanking-rank">{bobaPlace.rank}</td>
              <td className="BobaRanking-cell BobaRanking-name">{bobaPlace.name}</td>
              <td className="BobaRanking-cell BobaRanking-location">{bobaPlace.location}</td>
              <td className="BobaRanking-cell BobaRanking-rating">{bobaPlace.rating}</td>
              <td className="BobaRanking-cell BobaRanking-tier">{bobaPlace.tier}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BobaRanking;
