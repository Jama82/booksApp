import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<div className="navbar">
			<ul className="list">
				<li>
					<Link to="/">Library</Link>
				</li>
				<li>
					<Link to="/all">Books</Link>
				</li>
				<li>
					<Link to="/add">Add Books</Link>
				</li>
			</ul>
		</div>
	);
};

export default Navbar;
