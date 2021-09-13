import './App.css';
import randomColor from 'randomcolor';
import { useState } from 'react';

// Get props passed from parent component App
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

// Returns a Button react component based on the props passed from its parent App

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

// The parent component of PrintLogo and Button, which uses the hook usestate to set the color

function App() {
  const [color, setColor] = useState(
    randomColor({ luminosity: 'random', hue: 'random' }),
  );

  return (
    <div className="App">
      <PrintLogo style={{ color: color }} color={color} />
      <Button val={setColor} />
    </div>
  );
}

export default App;
