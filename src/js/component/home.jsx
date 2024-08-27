import React from "react";

//include images into your bundle
import NavBar from "./navbar.jsx";
import Cardtitle from "./Cardtitle.jsx";
import Cardbody from "./Cardbody.jsx";
import Cardfooter from "./Cardfooter.jsx";

//create your first component
const Home = () => {
	return (
		<div>
			<><NavBar /></>
			<><Cardtitle /></>
			<><Cardbody /></>
			<><Cardfooter /></>
		</div>

	);
};

export default Home;

