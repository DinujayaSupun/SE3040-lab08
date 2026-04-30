// Card component
// This component displays a product/service with image, title, and description

function Card() {
  return (
    <div>
      {/* Image section */}
      <img 
        src="https://picsum.photos/150"  // Reliable random image API
        alt="Sample"
      />

      {/* Title */}
      <h3>Sample Product</h3>

      {/* Description */}
      <p>This is a simple product description.</p>
    </div>
  );
}

export default Card; // Export component