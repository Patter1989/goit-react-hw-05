import css from './ImageGallery.module.css'
import ImageCard from '../ImageCard/ImageCard'



const ImageGallery = ({ pictures, handleClick }) => {
	
	return (
		<ul className={css.list}>
			{Array.isArray(pictures) &&
				pictures.map((picture, index) => {
					return (
						<li
							key={`${picture.id}+${index}`}
							onClick={() => {
								handleClick(picture.urls.regular);
							}}
						>
							<ImageCard picture={picture} />
						</li>
					);
				})}
		</ul>
	);
}

export default ImageGallery


