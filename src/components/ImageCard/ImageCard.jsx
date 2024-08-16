import css from "./ImageCard.module.css"

const ImageCard = ({picture}) => {
	return (
		<div className={css.imgWrapper}>
			<img
				className={css.pic}
				src={picture.urls.small}
				alt={picture.alt_description}
				
			/>
		</div>
	);
}

export default ImageCard
