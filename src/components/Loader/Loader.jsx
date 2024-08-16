import { ProgressBar } from "react-loader-spinner";
import css from "./Loader.module.css"
const Loader = () => {
  return (
		<div className={css.loaderWrapper}>
			<ProgressBar
				visible={true}
				height='80'
				width='80'
				color='#4fa94d'
				ariaLabel='progress-bar-loading'
				wrapperStyle={{
					top: 40,
					left: 20,
					bottom: 20,
					right: 20,
				}}
				wrapperClass=''
			/>
		</div>
	);
}

export default Loader
