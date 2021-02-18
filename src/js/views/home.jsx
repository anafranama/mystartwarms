import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

import { PersonCard } from "../component/person_card.jsx";
import { PlanetCard } from "../component/planet_card.jsx";
import { VehicleCard } from "../component/vehicle_card.jsx";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<br />
			{/* Aqui van las tarjetas de los personajes */}
			<div className="row">
				<div className="col-md-12">
					<h1 className="text-dark">Characters</h1>
				</div>
			</div>
			<div className="row">
				<div className="col-md-12">
					<div className="card-deck">
						{!!store.peoples &&
							store.peoples.results.map((item, index) => {
								let liked = false;
								store.favoritos.forEach(element => {
									if (element.uid === item.uid) {
										liked = true;
									}
								});
								return <PersonCard liked={liked} key={index} {...item} />;
							})}
					</div>
				</div>
			</div>

			<div className="row">
				<div className="col-md-6">
					<button
						onClick={() => {
							actions.getPeople(store.peoples.previous);
						}}
						type="button"
						className="btn btn-secondary miBoton">
						Previous
					</button>
				</div>

				<div className="col-md-6">
					<button
						onClick={() => {
							actions.getPeople(store.peoples.next);
						}}
						type="button"
						className="btn btn-secondary">
						Next
					</button>
				</div>
			</div>
			<br />
			{/* Aqui van las tarjetas de los planetas */}
			<br />
			<div className="row">
				<div className="col-md-12">
					<h1 className="text-dark">Planets</h1>
				</div>
			</div>
			<div className="row">
				<div className="col-md-12">
					<div className="card-deck">
						{!!store.planets &&
							store.planets.results.map((item, index) => {
								let liked = false;
								store.favoritos.forEach(element => {
									if (element.uid === item.uid) {
										liked = true;
									}
								});
								return <PlanetCard liked={liked} key={index} {...item} />;
							})}
					</div>
				</div>
			</div>

			<div className="row">
				<div className="col-md-6">
					<button
						onClick={() => {
							actions.getPlanets(store.planets.previous);
						}}
						type="button"
						className="btn btn-secondary miBoton">
						Previous
					</button>
				</div>

				<div className="col-md-6">
					<button
						onClick={() => {
							actions.getPlanets(store.planets.next);
						}}
						type="button"
						className="btn btn-secondary">
						Next
					</button>
				</div>
			</div>

			<br />

			{/* Aqui van las tarjetas de los vehiculos */}
			<br />
			<div className="row">
				<div className="col-md-12">
					<h1 className="text-dark">Vehicles</h1>
				</div>
			</div>
			<div className="row">
				<div className="col-md-12">
					<div className="card-deck">
						{!!store.vehicles &&
							store.vehicles.results.map((item, index) => {
								let liked = false;
								store.favoritos.forEach(element => {
									if (element.uid === item.uid) {
										liked = true;
									}
								});

								return <VehicleCard liked={liked} key={index} {...item} />;
							})}
					</div>
				</div>
			</div>
			<div className="row">
				<div className="col-md-12 d-flex justify-content-center">
					<button
						onClick={() => {
							actions.getVehicles(store.vehicles.previous);
						}}
						type="button"
						className="btn btn-secondary mr-5">
						Previous
					</button>
					<button
						onClick={() => {
							actions.getVehicles(store.vehicles.next);
						}}
						type="button"
						className="btn btn-secondary mf-5">
						Next
					</button>
				</div>
			</div>
			<br />
		</div>
	);
};
