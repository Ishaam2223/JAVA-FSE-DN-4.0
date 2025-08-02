const ListofIndianPlayers = ({ IndianPlayers }) => {
  return (
    <div>
      {IndianPlayers.map((player, index) => (
        <ul>
        <li key={index}>{player}</li>
        </ul>
      ))}
    </div>
  );
};

export default ListofIndianPlayers;
