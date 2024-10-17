import PropTypes from 'prop-types';
import '../style/button.css';

function Button(props) {
    return (
        <button className='submit-btn' onClick={props.act} style={{fontSize: props.size}}>
            {props.value}
        </button>
    );
}

Button.propTypes = {
    act: PropTypes.func,
    value: PropTypes.string,
    size: PropTypes.string
};

export default Button;
