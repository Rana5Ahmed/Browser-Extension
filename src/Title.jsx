  import React, { useState } from "react";
  import Card from "./Cards";

  function Title({ allCards, activeCards, inactiveCards, onCheck, onRemove }) {
    const [view, setView] = useState("all");

    let cardsToShow = [];
    if (view === "all") {
      cardsToShow = allCards;
    } else if (view === "active") {
      cardsToShow = activeCards;
    } else if (view === "inactive") {
      cardsToShow = inactiveCards;
    }
    return (
      <>
        <div className="menu">
          <h1>Extension List</h1>
          <div className="btn-states">
            <button onClick={() => setView("all")}>All</button>
            <button onClick={() => setView("active")}>Active</button>
            <button onClick={() => setView("inactive")}>Inactive</button>
          </div>
          </div>
          <div className="main-div">
            {cardsToShow.map((card) => (
              
              <Card
                key={card.name}
                prop={card}
                isActive={activeCards.some((c) => c.name === card.name)}
                onCheck={onCheck}
                onRemove={onRemove}
              />
            ))}
        </div>
        
      </>
    );
  }

  export default Title;
