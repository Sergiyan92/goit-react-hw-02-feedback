import css from './Viget.module.css';
export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <div className={css.statistics}>
      <h2 className={css.title}>Statistics</h2>
      <p className={css.subtitle}>Good: {good}</p>
      <p className={css.subtitle}>Neutral: {neutral}</p>
      <p className={css.subtitle}>Bad: {bad}</p>
      <p className={css.subtitle}>Total: {total}</p>
      <p className={css.subtitle}>Positive feedback: {positivePercentage}%</p>
    </div>
  );
};

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      <h2 className={css.title}>Please leave feedback</h2>
      {options.map(option => (
        <button
          className={css.button}
          key={option}
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export const Section = ({ title, children }) => {
  return (
    <div>
      <h2>{title}</h2>
      {children}
    </div>
  );
};
