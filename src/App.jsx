// Import components
import Greeting from './components/Greeting';
import NavBar from './components/NavBar';

// Main App component
function App() {
  return (
    <div>
      <h1>SE3040 Lab 08</h1>

      {/* Navigation Bar */}
      <NavBar />

      {/* Greeting message */}
      <Greeting />
    </div>
  );
}

export default App;