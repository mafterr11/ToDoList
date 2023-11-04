import PropTypes from "prop-types";

const Button = ({ color, text, showForm }) => {
  return (
    <button
      className='btn'
      style={{ backgroundColor: color }}
      onClick={showForm}
    >
      {text}
    </button>
  );
};

Button.defaultProps = {
  color: "steelblue",
  text: "Default",
};

Button.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string,
};

export default Button;
