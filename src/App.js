import React, { useState } from "react";
import "./App.css";

const ColorPicker = () => {
  const [selectedColor, setSelectedColor] = useState("#3498db");

  const handleColorChange = (e) => {
    setSelectedColor(e.target.value);
  };

  return (
    <div className="color-picker" style={{ backgroundColor: selectedColor }}>
      <h1>Color Picker</h1>
      <input
        type="color"
        value={selectedColor}
        onChange={handleColorChange}
        className="color-input"
      />
      <p>Selected Color: {selectedColor}</p>
    </div>
  );
};

export default ColorPicker;