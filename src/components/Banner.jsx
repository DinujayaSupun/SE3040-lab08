// Banner component
// This component displays a promotional message with a background color

function Banner() {
  return (
    <section style={{ backgroundColor: "#e8f4ff", padding: "20px", margin: "20px 0" }}>
      {/* Promotional message */}
      <h2>Special Offer!</h2>

      {/* Call-to-action text */}
      <p>Explore our latest products and services today.</p>
    </section>
  );
}

export default Banner; // Export component