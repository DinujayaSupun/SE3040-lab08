// Import local image
import userImage from '../assets/user.jpeg';

// Testimonial component
function Testimonial() {
  return (
    <div>
      {/* Controlled image size */}
      <img 
        src={userImage} 
        alt="Customer"
        style={{ width: "100px", height: "100px", borderRadius: "50%" }}
      />

      <p>"This product is amazing! Highly recommended."</p>
      <h4>- Dinujaya Supun</h4>
    </div>
  );
}

export default Testimonial;