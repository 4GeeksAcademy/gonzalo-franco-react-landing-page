import React from "react";
import ReactDOM from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import NavBar from "./navbar.jsx";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<NavBar />
		</div>
	);
};

export default Home;
