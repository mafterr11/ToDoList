import PropTypes from "prop-types";
// COMPONENTS
import Button from "./Button";

const Header = ({ title }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button color={"green"} text={"Add"} />
    </header>
  );
};

Header.defaultProps = {
  title: "Default Text",
};

Header.propTypes = {
  title: PropTypes.string,
};
export default Header;
