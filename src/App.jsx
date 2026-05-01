// Import components
import Greeting from './components/Greeting';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Card from './components/Card';
import Button from './components/Button';
import Banner from './components/Banner';
import Testimonial from './components/Testimonial';

// Main App component
function App() {
  return (
    <div>

      {/* Navigation Bar */}
      <NavBar />

      {/* Greeting message */}
      <Greeting />

      {/* Banner */}
      <Banner />

      {/* Card */}
      <Card />

      {/* Button */}
      <Button label="Click Me" />

      {/* Testimonial */}
      <Testimonial />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;