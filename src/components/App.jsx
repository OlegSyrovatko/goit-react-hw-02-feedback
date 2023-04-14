import React from 'react';

import FeedbackOptions from 'components/FeedbackOptions';
import Statistics from 'components/Statistics';
import Notification from 'components/Notification';

export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

  countTotalFeedback = (g, b, n) => {
    return g + b + n;
  };
  countPositiveFeedbackPercentage = (g, b, n) => {
    if (g + b + n === 0) {
      return 0;
    }
    return Math.round((g / (g + b + n)) * 100);
  };

  render() {
    const good = this.state.good;
    const bad = this.state.bad;
    const neutral = this.state.neutral;
    const total = this.countTotalFeedback(good, bad, neutral);
    const positivePercentage = this.countPositiveFeedbackPercentage(
      good,
      bad,
      neutral
    );
    let content;
    if (total === 0) {
      content = <Notification message="There is no feedback" />;
    } else {
      content = (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={positivePercentage}
        />
      );
    }
    return (
      <>
        <h1>Please leave feedback</h1>
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={this.onLeaveFeedback}
        />

        <h1>Statistics</h1>
        {content}
      </>
    );
  }
}
