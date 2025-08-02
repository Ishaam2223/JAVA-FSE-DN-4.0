import React from 'react';
import './App.css';


const office = {
  name: "Downtown Office Suite",
  rent: 55000,
  address: "OMR, Chennai",
  image: "https://images.pexels.com/photos/260689/pexels-photo-260689.jpeg?cs=srgb&dl=pexels-pixabay-260689.jpg&fm=jpg"
};


const officeList = [
  {
    name: "Tech Park Hub",
    rent: 75000,
    address: "45 Whitefield, Chennai",
    image: "https://watermark.lovepik.com/photo/20211121/large/lovepik-office-picture_500593379.jpg"
  },
  {
    name: "Startup Space",
    rent: 45000,
    address: "22 Indiranagar, Chennai",
    image: "https://watermark.lovepik.com/photo/20211121/large/lovepik-office-picture_500593379.jpg"
  },
  {
    name: "Corporate Tower",
    rent: 90000,
    address: "ECR, Chennai ",
    image: "https://watermark.lovepik.com/photo/20211121/large/lovepik-office-picture_500593379.jpg"
  }
];


const OfficeCard = ({ name, rent, address, image }) => {
  const rentStyle = {
    color: rent > 60000 ? 'green' : 'red'
  };

  return (
    <div className="card">
      <img src={image} alt="Office" className="image" />
      <h2>{name}</h2>
      <p style={rentStyle}>Rent: ₹{rent}</p>
      <p>Address: {address}</p>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <h1>Office Space Rental App</h1>

     
      <h2>Featured Office:</h2>
      <OfficeCard
        name={office.name}
        rent={office.rent}
        address={office.address}
        image={office.image}
      />

      
      <h2>Available Spaces:</h2>
      <div className="card-container">
        {officeList.map((office, index) => (
          <OfficeCard
            key={index}
            name={office.name}
            rent={office.rent}
            address={office.address}
            image={office.image}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
