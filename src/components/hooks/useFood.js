import { useEffect, useState } from "react";
import { FOOD } from "../food/FOOD";

export function useFood () {
	const [searchFood, setSearchFood] = useState('')
	const [error, setError] = useState(null)

	const getFood = () => {
			console.log(searchFood, "searchoooo");
			if (searchFood === "") return null;

			const searchChange = searchFood
				.toLowerCase()
				.normalize("NFD")
				.replace(/[\u0300-\u036f]/g, "");

			FOOD.forEach((item) => {
				const alimentoChange = item.Alimento.toLowerCase()
					.normalize("NFD")
					.replace(/[\u0300-\u036f]/g, "");
				if (alimentoChange.includes(searchChange)) {
					console.log(item, "item");
				}
			});
		};

		useEffect(() => {
			if (searchFood === "") {
				setError("No se puede hacer una busqueda vacia");
				return;
			}
			if (searchFood?.match(/^\d+$/)) {
				setError("No se  =puede realizar una buscqueda por número");
				return;
			}
		}, [searchFood]);

		return({getFood, error, setSearchFood})
}