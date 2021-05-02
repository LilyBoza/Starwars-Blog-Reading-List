import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Image, DropdownButton, Dropdown, Button, Row, Col } from "react-bootstrap";
import { Context } from "../store/appContext";
// import { AutomaticPrefetchPlugin } from "webpack";

export const NavbarMenu = () => {
	const { store, actions } = useContext(Context);

	return (
		<Navbar>
			<Navbar.Brand>
				<Link to="/">
					<Image
						src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsYhU16qecy5QtApQQJJEjwpgyazFGJhfzbQ&usqp=CAU"
						height="40"
						alt="Star Wars"
					/>
				</Link>
			</Navbar.Brand>
			<Nav className="mr-auto">
				<Link className="nav-link" to="/planets">
					Planets
				</Link>
				<Link className="nav-link" to="/characters">
					Personajes
				</Link>
			</Nav>

			<DropdownButton id="dropdown-basic-button" title={`Favoritos ${store.favorites.length}`}>
				<Row>
					<Col>
						{store.favorites.map((item, index) => {
							return (
								<div key={index}>
									<Dropdown.Item href="#/action-1">{item}</Dropdown.Item>
									<Button onClick={() => actions.deleteFavorites(item)} variant="secondary" size="sm">
										x
									</Button>
								</div>
							);
						})}
					</Col>
				</Row>
			</DropdownButton>
		</Navbar>
	);
};
