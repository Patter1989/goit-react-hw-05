import css from './LoadMoreBtn.module.css'

function LoadMoreBtn({onLoadingMore}) {
	return (
		<div className={css.btnWrapper}>
			<button
				type='buton'
				onClick={onLoadingMore}
				className={css.btn}
			>
				load more...
			</button>
		</div>
	);
}

export default LoadMoreBtn
