import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const PlanetCard = props => {
	const { store, actions } = useContext(Context);
	return (
		<>
			<div className="col-md-4">
				<div className="card">
					<img
						src="https://pbs.twimg.com/media/ESilZ_OWsAM-Hpn.jpg"
						width="450"
						height="200"
						className="card-img-top"
						alt="..."
					/>
					<div className="card-body">
						<h5 className="card-title">{props.name}</h5>
						<div className=" d-flex justify-content-between">
							<Link to={"/planet_profile/" + props.uid}>
								<button className="btn btn-success">Learn More</button>
							</Link>
							<i
								onClick={() => {
									actions.favoritos(props);
								}}
								className={props.liked ? "far fa-heart seleccionado" : "far fa-heart"}
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
