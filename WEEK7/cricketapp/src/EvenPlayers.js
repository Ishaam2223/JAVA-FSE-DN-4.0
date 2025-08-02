export function EvenPlayers(players) {
  
  const evenPositioned = players.filter((_, i) => i % 2 !== 0);
  const [second, fourth, sixth] = evenPositioned;

  return (
    <div>
    <ul>
      <li>Second: {second}</li>
      <li>Fourth: {fourth}</li>
      <li>Sixth: {sixth}</li>
      </ul>
    </div>
  );
}