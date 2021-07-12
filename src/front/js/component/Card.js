import React, { useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import StarWars from "../../img/StarWars.png";
import "../../styles/card.scss";

export function Card(props) {
	const { store, actions } = useContext(Context);

	useEffect(
		() => {
			// `JSON.stringify` para convertir un objeto en cadena con formato JSON.
			//Con esta condición se hacen los borrados del local storage, asi que no hace falta implementar el borrado ene l botón de borrar del Flux
			if (store.favourites.length > 0) {
				localStorage.setItem("store.favourites", JSON.stringify(store.favourites));
			}
		},
		[store.favourites]
	);

	return (
		<div className="card myCard">
			<img className="card-img-top" src={StarWars} alt={props.name} />

			<div className="card-body">
				<h5 className="card-title text-center">{props.name}</h5>

				<div className="d-flex justify-content-around">
					<Link to={`${props.category}${props.id}`}>
						<button className="btn btn-outline-primary" onClick={() => props.showDetails(props.id)}>
							Show more
						</button>
					</Link>

					<button
						className="btn icon"
						//Para que solo haya una "Card" es necesario pasarle a la función de añadir favoritos
						// el data al que se refiere, "dataPeople", "dataPlanets", etc,
						//El id del elemento seleccionado y el array de la lista de favoritos

						// onClick={() => props.addFavourite(props.data, props.id, props.favouritesArr)}

						onClick={() => props.addFavourite(props.data, props.url, props.favouritesArr)}>
						{props.favorite === false ? (
							<i className="fas fa-heart fa-lg" />
						) : (
							<i className="fas fa-heart fa-lg text-danger" />
						)}
					</button>
				</div>
			</div>
		</div>
	);
}

Card.propTypes = {
	id: PropTypes.string,
	name: PropTypes.string,
	url: PropTypes.string,
	favorite: PropTypes.bool,
	addFavourite: PropTypes.func,
	showDetails: PropTypes.func,
	category: PropTypes.string,
	data: PropTypes.array,
	favouritesArr: PropTypes.array
};
