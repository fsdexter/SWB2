import React, { useContext } from "react";

import { Card } from "./Card";
import { Context } from "../store/appContext";

export function Starships() {
	const { store, actions } = useContext(Context);

	return (
		<>
			{store.dataStarships.map(starship => {
				return (
					<div key={starship.uid} className="col-md-3">
						<Card
							id={starship.uid}
							name={starship.name}
							url={starship.url}
							favorite={starship.favorite}
							//Para ir al perfil del elemento seleccionado
							showDetails={actions.getDetailsStarship}
							category="/starships/"
							//Para añadir a favoritos
							addFavourite={actions.addFavourite}
							data={store.dataStarships}
							favouritesArr={store.favourites}
						/>
					</div>
				);
			})}
		</>
	);
}
