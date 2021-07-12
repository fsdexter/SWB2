const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			dataPeople: [],
			dataPlanets: [],
			dataSpecies: [],
			dataStarships: [],
			dataVehicles: [],
			detailsPeople: {},
			detailsPanet: {},
			detailsSpecie: {},
			detailsStarship: {},
			detailsVehicle: {},
			favourites: []
		},
		actions: {
			getDataPeople: async () => {
				try {
					let response = await fetch("https://www.swapi.tech/api/people");

					const data = await response.json();

					//Para poder meter el item como favorito

					let formattedCharacters = data.results.map(item => {
						return { ...item, favorite: false };
					});

					setStore({ dataPeople: formattedCharacters });
				} catch (e) {
					console.error(`error from database -- ${e}`);
				}
			},

			getDataPlanets: async () => {
				try {
					let response = await fetch("https://www.swapi.tech/api/planets");

					const data = await response.json();

					let formattedPlanets = data.results.map(item => {
						return { ...item, favorite: false };
					});

					setStore({ dataPlanets: formattedPlanets });
				} catch (e) {
					console.error(`error from database -- ${e}`);
				}
			},

			getDataSpecies: async () => {
				try {
					let response = await fetch("https://www.swapi.tech/api/species");

					const data = await response.json();

					let formattedSpecies = data.results.map(item => {
						return { ...item, favorite: false };
					});

					setStore({ dataSpecies: formattedSpecies });
				} catch (error) {
					console.error(`error from database -- ${error}`);
				}
			},

			getDataStarships: async () => {
				try {
					let response = await fetch("https://www.swapi.tech/api/starships");

					const data = await response.json();

					let formattedStarships = data.results.map(item => {
						return { ...item, favorite: false };
					});

					setStore({ dataStarships: formattedStarships });
				} catch (error) {
					console.error(`error from database -- ${error}`);
				}
			},

			getDataVehicles: async () => {
				try {
					let response = await fetch("https://www.swapi.tech/api/vehicles");

					const data = await response.json();

					let formattedVehicles = data.results.map(item => {
						return { ...item, favorite: false };
					});

					setStore({ dataVehicles: formattedVehicles });
				} catch (error) {
					console.error(`error from database -- ${error}`);
				}
			},

			getDetailsPeople: async id => {
				try {
					let response = await fetch(`https://www.swapi.tech/api/people/${id}`);

					const data = await response.json();

					let data_DetailsPeople = data.result;

					//Da un objecto
					setStore({ detailsPeople: data_DetailsPeople });
				} catch (e) {
					console.error(`error from database -- ${e}`);
				}
			},

			getDetailsPlanet: async id => {
				try {
					let response = await fetch(`https://www.swapi.tech/api/planets/${id}`);

					const data = await response.json();

					let data_DetailsPlanet = data.result;

					//Da un objecto
					setStore({ detailsPanet: data_DetailsPlanet });
				} catch (e) {
					console.error(`error from database -- ${e}`);
				}
			},

			getDetailsSpecie: async id => {
				try {
					let response = await fetch(`https://www.swapi.tech/api/species/${id}`);

					const data = await response.json();

					let data_DetailsSpecie = data.result;

					//Da un objecto
					setStore({ detailsSpecie: data_DetailsSpecie });
				} catch (e) {
					console.error(`error from database -- ${e}`);
				}
			},

			getDetailsStarship: async id => {
				try {
					let response = await fetch(`https://www.swapi.tech/api/starships/${id}`);

					const data = await response.json();

					let data_DetailsStarship = data.result;

					//Da un objecto
					setStore({ detailsStarship: data_DetailsStarship });
				} catch (e) {
					console.error(`error from database -- ${e}`);
				}
			},

			getDetailsVehicle: async id => {
				try {
					let response = await fetch(`https://www.swapi.tech/api/vehicles/${id}`);

					const data = await response.json();

					let data_DetailsVehicle = data.result;

					//Da un objecto
					setStore({ detailsVehicle: data_DetailsVehicle });
				} catch (e) {
					console.error(`error from database -- ${e}`);
				}
			},

			//Para poder añadir a la lista de favoritos todas las categorías
			//no es posible usar el id, pq el id se repite en distintas categorías

			addFavourite: (dataArr, itemUrl, favouritesArr) => {
				dataArr.map(item => {
					if (item.url === itemUrl) {
						if (favouritesArr.length === 0) {
							item.favorite = true;
							setStore({ favourites: [...favouritesArr, item] });
						} else {
							//NO REPETIR ELEMENTO EN FAVORITOS
							if (!favouritesArr.some(item => item.url === itemUrl)) {
								item.favorite = true;
								setStore({ favourites: [...favouritesArr, item] });
							}
						}
					}
				});
			},

			//Para poder recoger los datos guardados en el local storage al recargar la página
			getFavourites: () => {
				setStore({ favourites: JSON.parse(localStorage.getItem("store.favourites")) });
			},

			deleteFavourite: (itemUrl, favouritesArr) => {
				favouritesArr.map((item, index) => {
					if (item.url === itemUrl) {
						item.favorite = false;

						favouritesArr.splice(index, 1);

						setStore({ favourites: [...favouritesArr] });
					}
				});
			}
		}
	};
};

export default getState;
