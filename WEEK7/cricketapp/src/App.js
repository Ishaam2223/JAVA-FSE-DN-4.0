import React from 'react';
import ListofPlayers from './ListofPlayers';
import Scorebelow70 from './Scorebelow70';
import  {OddPlayers } from './OddPlayers';
import { EvenPlayers } from './EvenPlayers';
import { IndianPlayers as IndianTeam } from './MergedPlayers';
import ListofIndianPlayers from './ListofIndianPlayers';

const App = () => {
  const flag = false;

  const players = [
    { name: "Virat", score: 85 },
    { name: "Rohit", score: 45 },
    { name: "Dhoni", score: 75 },
    { name: "Rahul", score: 66 },
    { name: "Hardik", score: 92 },
    { name: "Shami", score: 60 },
    { name: "Jadeja", score: 70 },
    { name: "Pant", score: 55 },
    { name: "Bumrah", score: 80 },
    { name: "Gill", score: 88 },
    { name: "Ashwin", score: 59 }
  ];

  return (
    <div>
      {flag ? (
        <div>
          <h1>List of Players</h1>
          <ListofPlayers players={players} />
          <hr />
          <h1>List of Players having Scores Less than 70</h1>
          <Scorebelow70 players={players} />
        </div>
      ) : (
        <div>
          <h1>Indian Team</h1>
          <h1>Odd Players</h1>
          {OddPlayers(IndianTeam)}
          <hr />
          <h1>Even Players</h1>
          {EvenPlayers(IndianTeam)}
          <hr />
          <h1>List of Indian Players Merged:</h1>
          <ListofIndianPlayers IndianPlayers={IndianTeam} />
        </div>
      )}
    </div>
  );
};

export default App;
