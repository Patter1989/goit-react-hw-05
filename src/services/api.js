// import params from "../App.jsx"
import axios from "axios";

export const requestPicturesBySearchValue = async (searchedPic, imagesPerPage) => {
	const params = {
		client_id: "x5sxi2JDw6Skaao-Xvuci0r8y8gKaUKyGcYEAlWne6c",
		query: searchedPic,
		page: imagesPerPage,
		per_page: 12,
	};

	const response = await axios.get("https://api.unsplash.com/search/photos/", {
		params,
	});
	return response;
};
