import React, { useState } from 'react';

function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}

function GuestPage() {
  return (
    <div>
      <h2>Welcome Guest!</h2>
      <p>Flight Details:</p>
      <ul>
        <li>Flight A - 10:00 AM - ₹5000</li>
        <li>Flight B - 2:00 PM - ₹6000</li>
      </ul>
    </div>
  );
}

function UserPage() {
  return (
    <div>
      <h2>Welcome User!</h2>
      <p>You can now book your tickets.</p>
      <button>Book Ticket</button>
    </div>
  );
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginClick = () => setIsLoggedIn(true);
  const handleLogoutClick = () => setIsLoggedIn(false);

  let button;
  let page;

  if (isLoggedIn) {
    button = <LogoutButton onClick={handleLogoutClick} />;
    page = <UserPage />;
  } else {
    button = <LoginButton onClick={handleLoginClick} />;
    page = <GuestPage />;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Ticket Booking App</h1>
      {button}
      <hr />
      {page}
    </div>
  );
}

export default App;
