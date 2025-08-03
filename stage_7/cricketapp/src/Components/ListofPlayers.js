import React from 'react';

function ListofPlayers() {
  const players = [
    { name: 'Virat Kohli', score: 95 },
    { name: 'Rohit Sharma', score: 88 },
    { name: 'Shubman Gill', score: 77 },
    { name: 'KL Rahul', score: 66 },
    { name: 'Hardik Pandya', score: 51 },
    { name: 'Jadeja', score: 93 },
    { name: 'Bumrah', score: 61 },
    { name: 'Ashwin', score: 46 },
    { name: 'Iyer', score: 70 },
    { name: 'Surya', score: 58 },
    { name: 'Dhoni', score: 97 }
  ];

  const lowScorers = players.filter(p => p.score < 70);

  return (
    <div>
      <h2>All Players</h2>
      {players.map((p, index) => (
        <p key={index}>{p.name} - {p.score}</p>
      ))}

      <h3>Players with Score below 70</h3>
      {lowScorers.map((p, index) => (
        <p key={index}>{p.name} - {p.score}</p>
      ))}
    </div>
  );
}

export default ListofPlayers;