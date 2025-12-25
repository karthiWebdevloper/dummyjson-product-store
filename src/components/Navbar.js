import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navlink">Home</Link>
      <Link to="/cart" className="navlink">Cart</Link>
    </nav>
  );
}

export default Navbar;
