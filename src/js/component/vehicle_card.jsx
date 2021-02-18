import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const VehicleCard = props => {
	const { store, actions } = useContext(Context);
	return (
		<>
			<div className="col-md-4">
				<div className="card">
					<img
						src="https://cdn.pocket-lint.com/r/s/1200x/assets/images/149232-parenting-news-ucs-lego-star-wars-imperial-star-destroyer-is-very-big-and-very-grey-image1-nsbzhvmflt.png"
						width="450"
						height="200"
						className="card-img-top"
						alt="..."
					/>
					<div className="card-body">
						<h5 className="card-title">{props.name}</h5>
						<div className=" d-flex justify-content-between">
							<Link to={"/vehicle_profile/" + props.uid}>
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
