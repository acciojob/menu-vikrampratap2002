import React, { useState } from "react";
import Menu from "./Menu";
import "./../styles/App.css"

const menuData = [
  {
    id: 1,
    title: "Buttermilk Pancakes",
    category: "Breakfast",
    price: 15.99,
    img: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=600",
    desc: "Fluffy pancakes served with fresh fruit and syrup.",
  },
  {
    id: 2,
    title: "Country Delight",
    category: "Breakfast",
    price: 12.99,
    img: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=600",
    desc: "A delicious and healthy breakfast to start your day.",
  },
  {
    id: 3,
    title: "Bacon Overflow",
    category: "Breakfast",
    price: 14.99,
    img: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=600",
    desc: "A hearty breakfast with eggs, toast and bacon.",
  },
  {
    id: 4,
    title: "Diner Double",
    category: "Lunch",
    price: 13.99,
    img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600",
    desc: "Double burger with cheese and fresh vegetables.",
  },
  {
    id: 5,
    title: "Egg Attack",
    category: "Lunch",
    price: 11.99,
    img: "https://images.unsplash.com/photo-1550317138-10000687a72b?w=600",
    desc: "A tasty sandwich made with egg and fresh ingredients.",
  },
  {
    id: 6,
    title: "American Classic",
    category: "Lunch",
    price: 12.99,
    img: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=600",
    desc: "Classic burger served with delicious toppings.",
  },
  {
    id: 7,
    title: "Godzilla Milkshake",
    category: "Shakes",
    price: 6.99,
    img: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=600",
    desc: "Creamy milkshake with a rich chocolate flavor.",
  },
  {
    id: 8,
    title: "Oreo Dream",
    category: "Shakes",
    price: 5.99,
    img: "https://images.unsplash.com/photo-1577805947697-89e18249d767?w=600",
    desc: "A creamy shake blended with chocolate cookies.",
  },
  {
    id: 9,
    title: "Quarantine Buddy",
    category: "Shakes",
    price: 6.49,
    img: "https://images.unsplash.com/photo-1553787499-6f9133860278?w=600",
    desc: "A refreshing and creamy vanilla milkshake.",
  },
];

function App() {
  const [menuItems, setMenuItems] = useState(menuData);
  const [activeCategory, setActiveCategory] = useState("All");

  const filterItems = (category) => {
    setActiveCategory(category);

    if (category === "All") {
      setMenuItems(menuData);
    } else {
      const filtered = menuData.filter(
        (item) => item.category === category
      );

      setMenuItems(filtered);
    }
  };

  return (
    <main id="main">
      <section className="menu-section">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>

        <div className="btn-container">
          <button
            id="filter-btn-0"
            className={activeCategory === "All" ? "active" : ""}
            onClick={() => filterItems("All")}
          >
            All
          </button>

          <button
            id="filter-btn-1"
            className={activeCategory === "Breakfast" ? "active" : ""}
            onClick={() => filterItems("Breakfast")}
          >
            Breakfast
          </button>

          <button
            id="filter-btn-2"
            className={activeCategory === "Lunch" ? "active" : ""}
            onClick={() => filterItems("Lunch")}
          >
            Lunch
          </button>

          <button
            id="filter-btn-3"
            className={activeCategory === "Shakes" ? "active" : ""}
            onClick={() => filterItems("Shakes")}
          >
            Shakes
          </button>
        </div>

        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;