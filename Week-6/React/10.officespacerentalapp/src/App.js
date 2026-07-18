import "./App.css";
import office from "./office.jpg";

function App() {
  const heading = "Office Space";

  const offices = [
    {
      Name: "DBS",
      Rent: 50000,
      Address: "Chennai",
    },
    {
      Name: "Regus",
      Rent: 75000,
      Address: "Hyderabad",
    },
    {
      Name: "WeWork",
      Rent: 90000,
      Address: "Bangalore",
    },
  ];

  return (
    <div style={{ marginLeft: "40px" }}>
      <h1>{heading}, at Affordable Range</h1>

      <img
        src={office}
        alt="Office Space"
        width="25%"
        height="25%"
      />

      {offices.map((item, index) => (
        <div key={index}>
          <h2>Name: {item.Name}</h2>

          <h3
            style={{
              color: item.Rent <= 60000 ? "red" : "green",
            }}
          >
            Rent: Rs. {item.Rent}
          </h3>

          <h3>Address: {item.Address}</h3>

          <hr />
        </div>
      ))}
    </div>
  );
}

export default App;