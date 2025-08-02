const Scorebelow70 = ({ players }) => {
  const filtered = players.filter(player => player.score <= 70);

  return (
    <div>
      {filtered.map((item, index) => (
        <ul>
        <li key={index}>
          {item.name} - {item.score}
        </li>
        </ul>
      ))}
    </div>
  );
};

export default Scorebelow70;
