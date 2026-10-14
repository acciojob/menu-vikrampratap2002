import React from "react";

function Menu({ items }) {
  return (
    <div className="section-center">
      {items.map((item) => {
        const testId = `menu-item-${item.category.toLowerCase()}`;

        return (
          <article
            className="menu-item"
            key={item.id}
            data-test-id={testId}
          >
            <img
              src={item.img}
              alt={item.title}
              className="photo"
            />

            <div className="item-info">
              <header>
                <h4>{item.title}</h4>
                <h4 className="price">
                  ${item.price.toFixed(2)}
                </h4>
              </header>

              <p className="item-text">{item.desc}</p>

              <p className="category">
                Category: {item.category}
              </p>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export default Menu;