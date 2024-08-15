import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { FaSearch } from "react-icons/fa";
import "./index.css";


const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato, mozzarella, basil, olive oil",
    price: 15,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Diavola",
    ingredients: "Tomato, mozzarella, spicy salami, chili peppers",
    price: 20,
    photoName: "pizzas/diavola.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Quattro Stagioni",
    ingredients: "Tomato, mozzarella, ham, mushrooms, artichokes, olives",
    price: 22,
    photoName: "pizzas/quattro_stagioni.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Capricciosa",
    ingredients: "Tomato, mozzarella, ham, mushrooms, olives, artichokes, eggs",
    price: 21,
    photoName: "pizzas/capricciosa.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozzarella, mushrooms, garlic, parsley",
    price: 18,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Quattro Formaggi",
    ingredients: "Tomato, mozzarella, gorgonzola, parmesan, provolone",
    price: 23,
    photoName: "pizzas/quattro_formaggi.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Napoletana",
    ingredients: "Tomato, mozzarella, anchovies, capers, oregano",
    price: 19,
    photoName: "pizzas/napoletana.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Ortolana",
    ingredients: "Tomato, mozzarella, zucchini, eggplant, bell peppers, onions",
    price: 18,
    photoName: "pizzas/ortolana.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Boscaiola",
    ingredients: "Tomato, mozzarella, mushrooms, sausage, garlic, parsley",
    price: 21,
    photoName: "pizzas/boscaiola.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Marinara",
    ingredients: "Tomato, garlic, oregano, olive oil",
    price: 14,
    photoName: "pizzas/marinara.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Searchz />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  const style = {};

  return (
    <header className="header">
      <h1 style={style}>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  // const pizzas = [];
  const numPizzas = pizzas.length;

  return (
    <main className="menu">
      <h2>Our menu</h2>

      {numPizzas > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. {numPizzas} creative dishes to choose
            from. All from our stone oven, all organic, all delicious.
          </p>

          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu. Please come back later </p>
      )}
    </main>
  );
}

function Pizza({ pizzaObj }) {
  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>

        <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
      </div>
    </li>
  );
}
function Searchz() {
  return (
    <div className="search-box">
      <FaSearch />
      <input type="search" placeholder="Enter you need..." />
    </div>
  );
}
function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p>
          We're happy to welcome you between {openHour}:00 and {closeHour}:00.
        </p>
      )}
    </footer>
  );
}

function Order({ closeHour, openHour }) {
  return (
    <div className="order">
      <p>
        We're open from {openHour}:00 to {closeHour}:00. Come visit us or order
        online.
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
