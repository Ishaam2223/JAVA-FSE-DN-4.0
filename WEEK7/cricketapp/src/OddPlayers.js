
export function OddPlayers(players) {
  
  const oddIndexed = players.filter((_, i) => i % 2 === 0);
  const [first, third, fifth] = oddIndexed;

  return (
    <div>
      <ul>
      <li> First: {first}</li>
      <li> Third: {third}</li>
      <li> Fifth: {fifth}</li>
      </ul>
    </div>
  );
}
