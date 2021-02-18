import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const PlanetProfile = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();

	let [detallesPlaneta, setDetallesPlaneta] = useState(null);
	useEffect(() => {
		fetch("https://www.swapi.tech/api/planets/" + params.id)
			.then(response => response.json())
			.then(data => {
				setDetallesPlaneta(data.result.properties);
			});
	}, []);

	return (
		<div className="container">
			<br />
			<div className="row justify-content-md-center">
				<div className="col-8">
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Star_Wars_in_Guatemala_3.jpg/290px-Star_Wars_in_Guatemala_3.jpg"
						className="img-fluid"
						alt="..."
						width="700"
						height="300"
						style={{ border: "solid 2px black", borderRadius: "40px" }}
					/>
				</div>
				<div className="col-4">
					<h1>{detallesPlaneta !== null ? detallesPlaneta.name : ""}</h1>
					<ul>
						<li>Diameter: {detallesPlaneta !== null ? detallesPlaneta.diameter : ""}</li>
						<li>Rotation period: {detallesPlaneta !== null ? detallesPlaneta.rotation_period : ""}</li>
						<li>Orbital period: {detallesPlaneta !== null ? detallesPlaneta.orbital_period : ""}</li>
						<li>Gravity: {detallesPlaneta !== null ? detallesPlaneta.gravity : ""}</li>
						<li>Population: {detallesPlaneta !== null ? detallesPlaneta.population : ""}</li>
						<li>Climate: {detallesPlaneta !== null ? detallesPlaneta.climate : ""}</li>
						<li>Terrain: {detallesPlaneta !== null ? detallesPlaneta.terrain : ""}</li>
						<li>Surface water: {detallesPlaneta !== null ? detallesPlaneta.surface_water : ""}</li>
						<li>Created: {detallesPlaneta !== null ? detallesPlaneta.created : ""}</li>
						<li>Edited: {detallesPlaneta !== null ? detallesPlaneta.edited : ""} </li>
					</ul>
				</div>
			</div>
		</div>
	);
};
