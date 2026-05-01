// Footer component
// This component displays a styled footer with copyright and social links

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#111827",
        color: "white",
        textAlign: "center",
        padding: "20px",
        marginTop: "30px",
      }}
    >
      {/* Copyright message */}
      <p style={{ margin: "0 0 10px 0" }}>
        © 2026 SE3040 Store. All rights reserved.
      </p>

      {/* Social media links */}
      <div>
        <a href="#" style={footerLinkStyle}>Facebook</a>
        <span style={{ margin: "0 10px" }}>|</span>
        <a href="#" style={footerLinkStyle}>Instagram</a>
        <span style={{ margin: "0 10px" }}>|</span>
        <a href="#" style={footerLinkStyle}>LinkedIn</a>
      </div>
    </footer>
  );
}

// Common style object for footer links
const footerLinkStyle = {
  color: "#93c5fd",
  textDecoration: "none",
  fontWeight: "500",
};

export default Footer;