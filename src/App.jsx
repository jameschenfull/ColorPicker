// Write your Color component here
import { useState } from "react";
import "./index.css";

const Color = ({ color, selectedColor, pickSelectedColor }) => {
  const handleClick = () => {
    pickSelectedColor(color);
  };
};

const className = selectedColor === color ? `${color} selected` : color;

return <div className={className} onClick={handleClick}></div>;

const App = () => {
  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div className="red">red</div>
      </div>
      <div id="colors-list">
        <Color
          color="red"
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
        />
        <Color
          color="blue"
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
        />
        <Color
          color="green"
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
        />
      </div>
    </div>
  );
};

export default App;
