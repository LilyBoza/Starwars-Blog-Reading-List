const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favorites: [],
			peopleList: [],
			planetsList: []
		},
		actions: {
			fetchPeople: async () => {
				const URL = "https://swapi.dev/api/people/";
				const CONFIG = {
					method: "GET",
					headers: {
						"Content-type": "application/json"
					}
				};
				const response = await fetch(URL, CONFIG);
				const json = await response.json();

				console.log(">>DATA>>", json);
				setStore({ peopleList: json.results });
				// json.results es lo que me devuelve la API
			},
			setFavorites: name => {
				const store = getStore(); // me permite acceder al store
				setStore({ favorites: [...store.favorites, name] });
			},
			deleteFavorites: name => {
				const store = getStore();
				const index = store.favorites.indexOf(name);
				if (index > -1) {
					const newFavorites = store.favorites.filter(item => item !== name);
					setStore({ favorites: newFavorites });
				}
			},

			fetchPlanet: async () => {
				const URL = "https://www.swapi.tech/api/planets/";
				const CONFIG = {
					method: "GET",
					headers: {
						"Content-type": "application/json"
					}
				};
				const response = await fetch(URL, CONFIG);
				const json = await response.json();

				console.log(">>DATA>>", json);
				setStore({ planetsList: json.results });
				// json.results es lo que me devuelve la API
			}
		}
	};
};

export default getState;
