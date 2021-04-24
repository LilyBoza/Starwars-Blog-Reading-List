import React, { useContext, useEffect } from "react";
import { Jumbotron, Button } from "react-bootstrap";
import { Context } from "../store/appContext"; //conecta los componentes con el flux

export const Home = () => {
	const { store, actions } = useContext(Context);

	useEffect(() => {
		actions.fetchPeople();
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
						<li key={index}>
							<span>{item.name}</span>
							{store.favorites.includes(item.name) ? null : (
								<Button onClick={() => actions.setFavorites(item.name)} variant="outline-primary">
									Agregar
								</Button>
							)}
						</li>
					);
				})}
			</ul>
		</Jumbotron>
	);
};
