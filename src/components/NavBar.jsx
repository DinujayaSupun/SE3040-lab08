// NavBar component
// This component displays a styled navigation menu

function NavBar() {
  return (
    <nav
      style={{
        backgroundColor: "#1f2937",
        padding: "15px 30px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {/* Website / app logo text */}
      <h2 style={{ color: "white", margin: 0 }}>SE3040 Lab 08</h2>

      {/* Navigation links */}
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          gap: "25px",
          margin: 0,
          padding: 0,
        }}
      >
        <li><a href="#" style={linkStyle}>Home</a></li>
        <li><a href="#" style={linkStyle}>Products</a></li>
        <li><a href="#" style={linkStyle}>Reviews</a></li>
        <li><a href="#" style={linkStyle}>Contact</a></li>
      </ul>
    </nav>
  );
}

// Common style object for navigation links
const linkStyle = {
  color: "white",
  textDecoration: "none",
  fontWeight: "500",
};

export default NavBar;