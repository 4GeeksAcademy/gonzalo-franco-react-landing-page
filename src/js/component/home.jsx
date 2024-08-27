import React from "react";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import NavBar from "./navbar.jsx";
import Cardtitle from "./Cardtitle.jsx";
import Cardbody from "./Cardbody.jsx";

//create your first component
const Home = () => {
	return (
		<div>
			<><NavBar /></>
			<><Cardtitle /></>
			<><Cardbody/></>
		</div>

	);
};

export default Home;
