import React from 'react';

const ListofPlayers = ({ players }) => {
  return (
    <div>
      {players.map((item, index) => (
        <ul>
        <li key={index}>
          Mr. {item.name} <span>{item.score}</span>
        </li>
        </ul>
      ))}
    </div>
  );
};

export default ListofPlayers;
