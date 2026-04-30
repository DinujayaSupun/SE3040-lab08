// Button component
// This component displays a reusable button with customizable text

function Button(props) {
  return (
    <button>
      {/* Display text passed as prop */}
      {props.label}
    </button>
  );
}

export default Button; // Export component