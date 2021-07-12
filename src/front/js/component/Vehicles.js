import React, { useContext } from "react";

import { Card } from "./Card";
import { Context } from "../store/appContext";

export function Vehicles() {
	const { store, actions } = useContext(Context);

	return (
		<>
			{store.dataVehicles.map(vehicle => {
				return (
					<div key={vehicle.uid} className="col-md-3">
						<Card
							id={vehicle.uid}
							name={vehicle.name}
							url={vehicle.url}
							favorite={vehicle.favorite}
							//Para ir al perfil del elemento seleccionado
							showDetails={actions.getDetailsVehicle}
							category="/vehicles/"
							//Para añadir a favoritos
							addFavourite={actions.addFavourite}
							data={store.dataVehicles}
							favouritesArr={store.favourites}
						/>
					</div>
				);
			})}
		</>
	);
}
