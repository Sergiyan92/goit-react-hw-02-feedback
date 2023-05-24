import { Statistics } from './Viget';
import { FeedbackOptions } from './Viget';
import { Section } from './Viget';
import css from './Viget.module.css';
import React, { useState } from 'react';
export const App = () => {
  <div
    style={{
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: 40,
      color: '#010101',
    }}
  />;

  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });

  const handleFeedback = category => {
    setFeedback(prevState => ({
      ...prevState,
      [category]: prevState[category] + 1,
    }));
  };

  const { good, neutral, bad } = feedback;
  const totalFeedback = good + neutral + bad;
  const positivePercentage =
    totalFeedback > 0 ? Math.round((good / totalFeedback) * 100) : 0;

  const options = Object.keys(feedback);
  const hasFeedback = totalFeedback > 0;

  return (
    <div className={css.feedback}>
      <Section>
        <FeedbackOptions options={options} onLeaveFeedback={handleFeedback} />
      </Section>

      <Section>
        {hasFeedback ? (
          <Statistics
            className={css.list}
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positivePercentage={positivePercentage}
          />
        ) : (
          <p className={css.notification}>There is no feedback</p>
        )}
      </Section>
    </div>
  );
};
