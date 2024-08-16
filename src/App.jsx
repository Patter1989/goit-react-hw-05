

import SearchBar from "./components/SearchBar/SearchBar"
import { useEffect, useState } from "react";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Section from "./components/Section/Section";
import Loader from "./components/Loader/Loader";
import toast, { Toaster } from "react-hot-toast";
import {requestPicturesBySearchValue} from "./services/api";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageModal from "./components/ImageModal/ImageModal";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";


	export 

const App = () => {
	const [pictures, setPictures] = useState(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const [searchedPic, setSearchedPic] = useState(null);
	const [modalData, setModalData] = useState(null);
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [pages, setPages] = useState(1);
	const [totalPages, setTotalPages] = useState(0);

	// useEffect(() => {
	// 	async function fetchImages() {
	// 		try {
	// 			setLoading(true);
	// 			const response = await requestPictures();

	// 			setPictures(response.data.results);
	// 		} catch (err) {
	// 			setError(err.message);
	// 			toast.error("error:", err);
	// 		} finally {
	// 			setLoading(false);
	// 		}
	// 	}
	// 	fetchImages();
	// }, []);

	useEffect(() => {
		if (searchedPic === null) return;
		async function fetchImagesBySearchValue() {
			try {
				setLoading(true);
				const response = await requestPicturesBySearchValue(searchedPic, pages);
				if (response.data.results.length === 0) {
					toast.error("No matches, please change your request!");
					return;
				}
				setPictures((prevPictures) => {
					if (!Array.isArray(prevPictures)) {
						
						return response.data.results;
					}
					return [...prevPictures, ...response.data.results];
				});
				setTotalPages(response.data.total);
				setError(null);
			} catch (err) {
				setError(true);
			} finally {
				setLoading(false);
				
			}
		}
		fetchImagesBySearchValue();
	}, [searchedPic, pages]);

	const onSubmit = (inputValue) => {
		setSearchedPic(inputValue);
		setPictures(null);
		setPages(1);
	};

	const handleClick = (targetId) => {
		setModalData(targetId);
		setModalIsOpen(true);
	};

	const onCloseModal = () => {
		setModalIsOpen(false);
	};
	const onLoadingMore = () => {
		setPages(pages + 1);
		LoadMoreBtn(pages);
	};
	

	

	return (
		<div>
			<SearchBar onSubmit={onSubmit} />

			<Toaster
				position='top-center'
				containerStyle={{
					top: 40,
					left: 20,
					bottom: 20,
					right: 20,
				}}
			/>
			<Section>
				{error && <ErrorMessage />}
				<ImageGallery
					pictures={pictures}
					handleClick={handleClick}
				/>
			</Section>
			<Section>{loading && <Loader />}</Section>
			{Array.isArray(pictures) && pictures.length && totalPages !== pages && (
				<LoadMoreBtn onLoadingMore={onLoadingMore} />
			)}
			<ImageModal
				isOpen={modalIsOpen}
				modalData={modalData}
				onCloseModal={onCloseModal}
			/>
		</div>
	);
}

export default App
