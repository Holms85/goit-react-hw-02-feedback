import style from 'components/FeedbackOptions/FeedbackOptions.module.css';
import PropTypes from 'prop-types'
const Button = ({ options, onLeaveFeedback }) => {
  // console.log(arr);
  return (
    <div>
      {options.map((button, id) => {
        return (
          <button
            key={id}
            type="button"
            onClick={onLeaveFeedback}
            className={style.responseBtn}
          >
            {button}
          </button>
        );
      })}
    </div>
  );
};

Button.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
}

export default Button;
