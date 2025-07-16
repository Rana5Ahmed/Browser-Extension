  import React, { useState } from "react";
  import NavBar from './NavBar.jsx';
  import Card from './Cards.jsx';
  import data from './data.json';
  import Title from './Title.jsx';

  function App() {
    const [allCards, setAllCards] = useState(data);
    const [activeCards, setActiveCards] = useState([]);
    const [inactiveCards, setInactiveCards] = useState(data);
    


    function handleCheck(card, isChecked) {
      if (isChecked) {
        setActiveCards((prev) => [...prev, card]);
        setInactiveCards((prev) => prev.filter((c) => c.name !== card.name));
      } else {
        setInactiveCards((prev) => [...prev, card]);
        setActiveCards((prev) => prev.filter((c) => c.name !== card.name));
      }
    }
      function handleRemove(card) {
        if (window.confirm(`Are you sure you want to remove "${card.name}"?`)) {
          setAllCards((prev) => prev.filter((c) => c.name !== card.name));
          setActiveCards((prev) => prev.filter((c) => c.name !== card.name));
          setInactiveCards((prev) => prev.filter((c) => c.name !== card.name));
        }
      }

    return (
      <>
      <div className="external-continer">
        <NavBar />
        <div>
          <Title
        allCards={allCards}
        activeCards={activeCards}
        inactiveCards={inactiveCards}
        onCheck={handleCheck}
        onRemove={handleRemove}
      />
             </div>
        </div>
      </>
    );
  }
  export default App;
