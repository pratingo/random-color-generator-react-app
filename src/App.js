import './App.css';
import randomColor from 'randomcolor';
import { useState } from 'react';
import { Button } from './Button';
import { Logo } from './Logo.js';

// The parent component of PrintLogo and Button, which uses the hook usestate to set the color

function App() {
  const [color, setColor] = useState(
    randomColor({ luminosity: 'random', hue: 'random' }),
  );

  return (
    <div
      className="App"
      style={{
        'background-color': 'white',
        display: 'block',
        alignItems: 'center',
        height: '1000px',
        position: 'center',
      }}
    >
      <Logo
        style={{
          color: color,
          backgroundColor: 'white',
          justifyContent: 'center',
          justifyText: 'center',
        }}
        color={color}
      />
      <Button onClickChangeLogoColor={setColor} />
    </div>
  );
}

export default App;
