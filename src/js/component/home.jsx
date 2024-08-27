import React from "react";

//include images into your bundle
import NavBar from "./navbar.jsx";
import CardTittle from "./Cardtitle.jsx"
import CardSection from "./cardsection.jsx"



//create your first component
const Home = () => {
	return (
		<>
			<NavBar />
			<div className="container-fluid col-8">
				<div className="my-3">
					<CardTittle />
				</div>
				<CardSection />
			</div>
		</>
	);
};

export default Home;

