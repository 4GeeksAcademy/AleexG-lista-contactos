import { Link } from "react-router-dom";

export const Navbar = () => {

	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-dark">
			<div className="container">
				<Link to="/" className="navbar-brand fw-bold">
					<span className="navbar-brand mb-0 h1 text-light">Home</span>
				</Link>
				<div className="ms-auto">
					<Link to="/crearContacto.jsx">
						<button className="btn btn-outline-primary">Create new contact</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};