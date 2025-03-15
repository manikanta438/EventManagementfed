import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">cvent Manager</div>
      <ul>
        
        <li><Link to="/event-types">Event Types</Link></li>
        <li><Link to="/resources">Resources</Link></li>
        <li><Link to="/company">Company</Link></li>
      </ul>
      <Link to="/event-venues" className="event-venues-button">Event Venues</Link>
    </nav>
  );
}
