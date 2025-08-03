import React from 'react';

function IndianPlayers() {
  const allPlayers = ['Kohli', 'Rohit', 'Gill', 'Rahul', 'Pandya', 'Jadeja'];
  const oddPlayers = allPlayers.filter((_, index) => index % 2 === 0);
  const evenPlayers = allPlayers.filter((_, index) => index % 2 !== 0);

  const T20players = ['Virat', 'Rohit', 'Surya'];
  const RanjiTrophyPlayers = ['Mayank', 'Pujara', 'Karun'];

  const allCombined = [...T20players, ...RanjiTrophyPlayers]; // Merging arrays

  return (
    <div>
      <h2>Destructured Players</h2>
      <p><strong>Odd Team:</strong> {oddPlayers.join(', ')}</p>
      <p><strong>Even Team:</strong> {evenPlayers.join(', ')}</p>

      <h3>Merged Player List</h3>
      {allCombined.map((p, index) => (
        <p key={index}>{p}</p>
      ))}
    </div>
  );
}

export default IndianPlayers;