import randomColor from 'randomcolor';

// Returns a Button react component based on the props passed from its parent App

export function Button(props) {
  return (
    <button
      style={{ backgroundColor: 'gold', 'border-radius': 5, padding: 10 }}
      onClick={() =>
        props.val(randomColor({ luminosity: 'random', hue: 'random' }))
      }
    >
      Click to change color
    </button>
  );
}
