import React, { useContext } from "react";

import { Card } from "./Card";
import { Context } from "../store/appContext";

export function Species() {
	const { store, actions } = useContext(Context);

	return (
		<>
			{store.dataSpecies.map(specie => {
				return (
					<div key={specie.uid} className="col-md-3">
						<Card
							id={specie.uid}
							name={specie.name}
							url={specie.url}
							favorite={specie.favorite}
							//Para ir al perfil del elemento seleccionado
							showDetails={actions.getDetailsSpecie}
							category="/species/"
							//Para añadir a favoritos
							addFavourite={actions.addFavourite}
							data={store.dataSpecies}
							favouritesArr={store.favourites}
						/>
					</div>
				);
			})}
		</>
	);
}
