import './App.css';
import randomColor from 'randomcolor';
import { useState } from 'react';
import { Button } from './button';
import { Logo } from './logo.js';

// The parent component of PrintLogo and Button, which uses the hook usestate to set the color

function App() {
  const [color, setColor] = useState(
    randomColor({ luminosity: 'random', hue: 'random' }),
  );

  return (
    <div
      className="App"
      style={{
        'background-color': 'lightgrey',
        display: 'block',
        alignItems: 'center',
        height: '1000px',
        position: 'center',
        border: '3px solid black',
      }}
    >
      <Logo
        style={{
          color: color,

          backgroundColor: 'lightgrey',
          justifyContent: 'center',
          justifyText: 'center',
        }}
        color={color}
      />
      <Button val={setColor} />
    </div>
  );
}

export default App;
