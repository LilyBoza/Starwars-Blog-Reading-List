import React, { useContext, useEffect } from "react";
import { Jumbotron, Button, Card } from "react-bootstrap";
import { Context } from "../store/appContext"; //conecta los componentes con el flux

export const Home = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.fetchPeople();
		actions.fetchPlanet();
	}, []);

	return (
		<Jumbotron>
			<h1>Listado de personajes</h1>
			<span>{JSON.stringify(store.favorites)}</span>
			{/* se transforma el arreglo a texto plano para que se interprete como html */}
			{/* <span>{JSON.stringify(store.peopleList)}</span> */}
			<ul>
				{store.peopleList.map((item, index) => {
					return (
						<Card style={{ width: "18rem" }} key={index}>
							<Card.Img
								variant="top"
								src="https://as.com/meristation/imagenes/2019/11/21/noticias/1574336961_955124_1574337025_noticia_normal.jpg"
							/>
							<Card.Body>
								<Card.Title>{item.name}</Card.Title>
								{store.favorites.includes(item.name) ? null : (
									<Button onClick={() => actions.setFavorites(item.name)} variant="outline-primary">
										Agregar
									</Button>
								)}
							</Card.Body>
						</Card>
					);
				})}
			</ul>
		</Jumbotron>
	);
};
