import React from "react";

//include images into your bundle
import NavBar from "./navbar.jsx";
import CardTittle from "./Cardtitle.jsx"
import CardPost from "./cardpost.jsx"

//create your first component
const Home = () => {
	return (
		<>
			<NavBar />
			<CardTittle />
			<CardPost />
		</>
	);
};

export default Home;

