import { ALIMENTOS } from "../alimentos/alimentos";

const handleSearch = (searchValue) => {
	let search = [];
	if (searchValue.length === 0) {
		return null;
	} else {
		ALIMENTOS.forEach((item) => {
			if (item.Alimento.toLowerCase().includes(searchValue)) {
				search.push(item);
			}
		});
		if (search.length > 0) {
			search.forEach((item) => {
				item.ejemplo?.forEach((subitem) => {
					if ("cantidadGramos" in subitem) {
						setType("gr");
					}
					if ("cantidadCC" in subitem) {
						setType("cc");
					}
				});
			});
		}
		setResultSearch(search);
		if (search.length === 0) {
			return setFound(true);
		} else {
			return null;
		}
	}
};

export default handleSearch