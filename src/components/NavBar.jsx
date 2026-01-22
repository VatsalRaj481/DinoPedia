import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="navbar">
      <h2 className="logo">🦖 Dinopedia</h2>
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/search">Search</Link>
      </div>
    </nav>
  );
}

export default NavBar;
