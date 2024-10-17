import PropTypes from 'prop-types';
import '../style/input-component.css';

const InputComponent = (props) => {
    return (
        <div className="field">
            <input 
                type={props.type} 
                placeholder={props.holder} 
                size={props.size != null ? props.size : 12}
                onChange={props.onChange}
            />
        </div>
    );
};

InputComponent.propTypes = {
    type: PropTypes.string.isRequired, 
    holder: PropTypes.string.isRequired,
    size: PropTypes.string,
    onChange: PropTypes.func.isRequired
};

export default InputComponent;
