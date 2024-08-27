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
			<div className ="p">
			<><Cardtitle /></>
			<><Cardbody/></>
			</div>
			<><Cardfooter/></>
			
		</div>

	);
};

export default Home;

