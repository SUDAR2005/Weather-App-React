import '../style/nav-bar.css';
import PropTypes from 'prop-types';

function NavBar({ arr }) {
  return (
    <nav className="nav-bar">
      <ul>
        {arr.map((item, index)=>(
          <li key={index}>
            <a href={item.link}>{item.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

NavBar.propTypes = {
  arr: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default NavBar;