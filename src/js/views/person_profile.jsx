import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const PersonProfile = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	let [detallesPersona, setDetallesPersona] = useState(null);
	useEffect(() => {
		fetch("https://www.swapi.tech/api/people/" + params.id)
			.then(response => response.json())
			.then(data => {
				setDetallesPersona(data.result.properties);
			});
	}, []);

	return (
		<div className="container">
			<br />
			<div className="row justify-content-md-center">
				<div className="col-8">
					<img
						src="https://upload.wikimedia.org/wikipedia/en/9/9b/Luke_Skywalker.png"
						className="img-fluid"
						alt="..."
						width="600"
						height="300"
						style={{ border: "solid 2px black", borderRadius: "40px" }}
					/>
				</div>
				<div className="col-4">
					<h1>{detallesPersona !== null ? detallesPersona.name : ""}</h1>
					<ul>
						<li>Height: {detallesPersona !== null ? detallesPersona.height : ""}</li>
						<li>Mass: {detallesPersona !== null ? detallesPersona.mass : ""}</li>
						<li>Hair color: {detallesPersona !== null ? detallesPersona.hair_color : ""}</li>
						<li>Skin color: {detallesPersona !== null ? detallesPersona.skin_color : ""}</li>
						<li>Eye color: {detallesPersona !== null ? detallesPersona.eye_color : ""}</li>
						<li>Birth year: {detallesPersona !== null ? detallesPersona.birth_year : ""}</li>
						<li>Gender: {detallesPersona !== null ? detallesPersona.gender : ""}</li>
						<li>Created: {detallesPersona !== null ? detallesPersona.created : ""}</li>
						<li>Edited: {detallesPersona !== null ? detallesPersona.edited : ""}</li>
					</ul>
				</div>
			</div>
			<br />
		</div>
	);
};
