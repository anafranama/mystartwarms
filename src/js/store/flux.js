const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			peoples: null,
			planets: null,
			vehicles: null,
			favoritos: [],
			actual_user: "Ingrese a",
			actual_user_2: "su cuenta",
			token: null
		},
		actions: {
			getPeople: url => {
				fetch(url)
					.then(response => response.json())
					.then(data => {
						setStore({ peoples: data });
					});
			},
			getPlanets: url => {
				fetch(url)
					.then(response => response.json())
					.then(data => {
						setStore({ planets: data });
					});
			},
			getVehicles: url => {
				fetch(url)
					.then(response => response.json())
					.then(data => {
						setStore({ vehicles: data });
					});
			},
			getDetallesPersonas: id => {
				fetch("https://www.swapi.tech/api/people/" + id)
					.then(response => response.json())
					.then(data => {
						return data.result.properties;
					});
			},
			getDetallesPlanetas: id => {
				fetch("https://www.swapi.tech/api/planets/" + id)
					.then(response => response.json())
					.then(data => {
						return data.result.properties;
					});
			},
			getDetallesVehiculos: id => {
				fetch("https://www.swapi.tech/api/starships/" + id)
					.then(response => response.json())
					.then(data => {
						return data.result.properties;
					});
			},
			favoritos: fav => {
				let alreadyFav = false;
				let favArr = getStore().favoritos;

				if (favArr.length === 0) {
					setStore({ favoritos: [...favArr, fav] });
				} else {
					favArr.forEach(element => {
						if (element.uid === fav.uid) {
							alreadyFav = true;
						}
					});
					if (!alreadyFav) {
						setStore({ favoritos: [...favArr, fav] });
					}
				}
				//setStore({ favoritos: [...getStore().favoritos, fav] });
			},
			eliminar: elementoEliminar => {
				setStore({
					favoritos: getStore().favoritos.filter(fav => {
						return fav !== elementoEliminar;
					})
				});
			},
			login: () => {
				setStore({
					actual_user: sessionStorage.getItem("actual_user"),
					actual_user_2: sessionStorage.getItem("actual_user_2"),
					token: sessionStorage.getItem("u_token")
				});
			},
			logOut: () => {
				setStore({
					actual_user: "Ingrese a",
					actual_user_2: "su cuenta",
					token: null
				});
			}
		}
	};
};

export default getState;
