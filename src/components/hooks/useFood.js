import { useEffect, useState } from "react";
import { FOOD } from "../food/FOOD";

export function useFood () {
	const [searchFood, setSearchFood] = useState('')
	const [error, setError] = useState(null)
	const [food, setFood] = useState([])
	const [moreFood, setMoreFood] = useState([])
	const [showRatio, setShowRatio] = useState(false);

	const getFood = () => {
		console.log("getFood");
			if (searchFood === "") return null;

			const searchChange = searchFood
				.toLowerCase()
				.normalize("NFD")
				.replace(/[\u0300-\u036f]/g, "");

				const foods = FOOD.filter((item) => {
					const alimentosChange = item.Alimento.toLowerCase()
					.normalize("NFD")
					.replace(/[\u0300-\u036f]/g, "");
					return alimentosChange.includes(searchChange)
				})

				const example = foods.filter((item) => {
					if (item.ejemplo) {
							let alimentosMore = item.Alimento
							.toLowerCase()
							.normalize("NFD")
							.replace(/[\u0300-\u036f]/g, "");
							return alimentosMore.includes(searchChange);
					}
					return false;
			});

				setFood(foods)
				setMoreFood(example)
		};

		const handleDelete = () => {
			setFood([])
			setMoreFood([])
			setShowRatio(false)
		}

		const handleShowRatio = () => {
			console.log("handleShowRaitio");
			setShowRatio(!showRatio);
		};

		useEffect(() => {
				if (searchFood === "") {
					setError("No se puede hacer una busqueda vacia");
					return;
				}
				if (searchFood?.match(/^\d+$/)) {
					setError("No se puede realizar una buscqueda por número");
					return;
				} else {
					setError(null);
				}
		}, [searchFood]);

		return({getFood, error, searchFood, setSearchFood, food, moreFood, handleDelete, handleShowRatio, showRatio})
}