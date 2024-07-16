import React, { useEffect, useState } from 'react';
import './index.css';
import ColorItem from './colorItem';

function App() {
  const colors = ["#2d3436", "#FF4191", "#A9B388", "#4F709C", "#B99470", "#213555", "#FF204E", "#A0153E", "#5D0E41", "#FFB200", "#06D001", "#FF7F3E"];
  const defaultColor = colors[0]; 

  const [state, setState] = useState(false);
  const setTheme = (color) => {
    document.documentElement.style.setProperty("--bg-color", color);
  }

  const setColor = (event) => {
    const currentColor = event.target.style.backgroundColor;
    setTheme(currentColor);
  }

  useEffect(() => {
    setTheme(defaultColor);
  });

  return (
    <div className="App">
      <div className={`color-switcher ${state && 'color-switcher--open'}`}>
        <button onClick={()=> setState(prevState => !prevState)}><i className="ri-settings-2-fill"></i></button>
        <h1 className='heading'>Select Color</h1>
        <div className='color-list'>
          {colors.map((color, idx) => (
            <ColorItem key={idx} setColor={setColor} color={color} />
          ))}
        </div>
      </div>
    </div>
  );
}
export default App;
