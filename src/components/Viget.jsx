import css from './Viget.module.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Statistics extends Component {
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;

    return (
      <div className={css.statistics}>
        <p className={css.subtitle}>Good: {good}</p>
        <p className={css.subtitle}>Neutral: {neutral}</p>
        <p className={css.subtitle}>Bad: {bad}</p>
        <p className={css.subtitle}>Total: {total}</p>
        <p className={css.subtitle}>Positive feedback: {positivePercentage}%</p>
      </div>
    );
  }
}

export class FeedbackOptions extends Component {
  render() {
    const { options, onLeaveFeedback } = this.props;

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
  }
}

export class Section extends Component {
  render() {
    const { title, children } = this.props;

    return (
      <div>
        <h2 className={css.title}>{title}</h2>
        {children}
      </div>
    );
  }
}

export class Notification extends Component {
  render() {
    const { message } = this.props;

    return <p className={css.subtitle}>{message}</p>;
  }
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};
Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
