    import React from "react";
    import * as images from './images.js';

    function Card({ prop, isActive, onCheck,onRemove }) {
    function handleCheckboxChange(e) {
        onCheck(prop, e.target.checked);
    }
        function handleRemoveClick() {
            onRemove(prop);
    }
    const logoSrc = images[prop.logo];
    return (<>
        <div className="individual-card">
        <div>
        <div>
        <img src={logoSrc} alt={prop.name} />
        </div>
        <div>
        <h3>{prop.name}</h3>
        <p>{prop.description}</p>
        </div>
        </div>
        <div className="active-remove-btn">
        <button onClick={handleRemoveClick}>Remove</button>
        <input
            type="checkbox"
            className="checkBox"
            checked={isActive}
            onChange={handleCheckboxChange}
        />
        </div>
        </div>
        </>
    );
    }

    export default Card;
