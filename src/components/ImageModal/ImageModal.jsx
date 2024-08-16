import css from "./ImageModal.module.css"
import Modal from "react-modal";

// const customStyles = {
// 	content: {
// 		top: "50%",
// 		left: "50%",
// 		right: "auto",
// 		bottom: "auto",
// 		marginRight: "-50%",
// 		transform: "translate(-50%, -50%)",
// 	},
// };

Modal.setAppElement("#root");

const ImageModal = ({ modalData, isOpen, onCloseModal }) => {
    
    
  return (
		<Modal
			isOpen={isOpen}
			onRequestClose={onCloseModal}
			shouldCloseOnOverlayClick={true}
			shouldCloseOnEsc={true}
			style={{
				overlay: {
					backgroundColor: "rgba(0,0,0,0.8)",
					},
				content: {
					margin:"0 auto",
					border: "none",
					background: "#fff",
					overflow: "off",
					WebkitOverflowScrolling: "touch",
					borderRadius: "4px",
					outline: "none",
					padding: "0px",
					width: "60%",
					height: "80%",
					boxSizing: "border-box",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				},
			}}
		>
			<img
				className={css.pic}
				src={modalData}
			/>
		</Modal>
	);
}

export default ImageModal
