import style from 'components/FeedbackOptions/FeedbackOptions.module.css';
const Button = ({ good, neutral, bad, onLeaveFeedback }) => {
  const response = { good, neutral, bad };
  const arr = Object.keys(response);
  console.log(arr);
  return (
    <div>
      {arr.map((button, id) => {
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

export default Button;
