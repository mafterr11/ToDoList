import PropTypes from "prop-types";
// COMPONENTS
import Button from "./Button";

const Header = ({ title, showForm, show }) => {
  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button
        color={show ? "red" : "green"}
        text={show ? "Close" : "Add"}
        showForm={showForm}
      />
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

Header.propTypes = {
  title: PropTypes.string,
};
export default Header;
