import { Link } from "react-router-dom";
import css from "./NotFoundPage.module.css"
const NotFoundPage = () => {
  return (
		<div className={css.wrapper}>
			<p className={css.text}>
				Sorry, such a page does not exist. Please return to the home page by the
				link below.
			</p>
			<p>⬇️👇⬇️</p>
			<Link
				className={css.link}
				to={"/"}
			>
				Go to the home page
			</Link>
		</div>
	);
}

export default NotFoundPage
