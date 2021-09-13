import './App.css';
import randomColor from 'randomcolor';
import { useState } from 'react';

function PrintLogo(props) {
  return (
    <>
      <p style={props.style}>###############################</p>
      <p style={props.style}>###############################</p>
      <p style={props.style}>###############################</p>
      <p style={props.style}>
        #####&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;#####
      </p>
      <p style={props.style}>
        #####&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        {props.color}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;#####
      </p>
      <p style={props.style}>
        #####&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;#####
      </p>
      <p style={props.style}>###############################</p>
      <p style={props.style}>###############################</p>
      <p style={props.style}>###############################</p>
    </>
  );
}

function Button(props) {
  return (
    <button
      onClick={() =>
        props.val(randomColor({ luminosity: 'random', hue: 'random' }))
      }
    >
      Click to change color
    </button>
  );
}

function App() {
  const [color, setColor] = useState(
    randomColor({ luminosity: 'random', hue: 'random' }),
  );

  // const color = randomColor({ luminosity: 'random', hue: 'random' });

  return (
    <div className="App">
      <PrintLogo style={{ color: color }} color={color} />
      <Button val={setColor} />
    </div>
  );
}

export default App;
