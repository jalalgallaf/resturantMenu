import React from "react";
import ReactDOM from "react-dom/client";

import pizzaData from "./data";

import "./index.css";

const Pizza = ({ pizzaObject }) => {
  return (
    <div className={!pizzaObject.soldOut ? "pizza" : "pizza sold-out"}>
      <img src={pizzaObject.photoName} alt={pizzaObject.name} />
      <div>
        <h3>{pizzaObject.name}</h3>
        <p>{pizzaObject.ingredients}</p>
        <span>{pizzaObject.price}</span>
      </div>
    </div>
  );
};

const Menu = () => {
  const pizzaDataNum = pizzaData.length;
  return (
    <main className="menu">
      <h2>Menu</h2>

      {pizzaDataNum > 0 ? (
        <ul className="pizzas">
          {pizzaData.map((pizza) => (
            <Pizza pizzaObject={pizza} />
          ))}
        </ul>
      ) : (
        <h1>No data</h1>
      )}
    </main>
  );
};

const Header = () => {
  return (
    <header className="header">
      <h1>Pizza Menu</h1>
    </header>
  );
};

function Footer() {
  const time = new Date().getHours();
  const openHour = 8;
  const closeHour = 23;
  const isOpen = time >= openHour && time <= closeHour;

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} />
      ) : (
        <p>
          We are happy to welcome you between {openHour} to {closeHour}
        </p>
      )}
    </footer>
  );
}

function Order({ closeHour }) {
  return (
    <div className="order">
      <p>We are currently open till {closeHour}</p>
      <button className="btn">Order</button>
    </div>
  );
}

const App = () => {
  return (
    <div className="container">
      <Header />
      <Menu />

      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
