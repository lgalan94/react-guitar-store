import PropTypes from 'prop-types';
import { LuShoppingCart } from "react-icons/lu";

const CustomButton = ({ handleClick, containerStyles, title }) => {
	return (
		<button
				disabled={false}
				className={`custom-btn ${containerStyles}`}
				onClick={handleClick}
			>
			{title}
			{containerStyles === 'add-cart__button' && <LuShoppingCart size={20} />}
		</button>
	)

	CustomButton.propTypes = {
	  handleClick: PropTypes.func.isRequired,
	  containerStyles: PropTypes.string,
	  title: PropTypes.string
	};
}

export default CustomButton;