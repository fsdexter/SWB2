import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { Home } from "./pages/home";
import { DetailsCharacter } from "./pages/DetailsCharacter";
import { DetailsPlanet } from "./pages/DetailsPlanet";
import { DetailsSpecie } from "./pages/DetailsSpecie";
import { DetailsStarship } from "./pages/DetailsStarship";
import { DetailsVehicle } from "./pages/DetailsVehicle";
import injectContext from "./store/appContext";

import { MyNavbar } from "./component/MyNavbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter basename={basename}>
				<MyNavbar />
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>

					{/* "useParams" */}
					<Route exact path="/people/:uid">
						<DetailsCharacter />
					</Route>

					<Route exact path="/planets/:uid">
						<DetailsPlanet />
					</Route>

					<Route exact path="/species/:uid">
						<DetailsSpecie />
					</Route>

					<Route exact path="/starships/:uid">
						<DetailsStarship />
					</Route>

					<Route exact path="/vehicles/:uid">
						<DetailsVehicle />
					</Route>

					<Route>
						<h1>Not found!</h1>
					</Route>
				</Switch>
				<Footer />
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
