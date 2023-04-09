import React from 'react';

import FeedbackOptions from 'components/FeedbackOptions';
import Statistics from 'components/Statistics';
import Notification from 'components/Notification';

export class App extends React.Component {
  static state = {
    initialGood: 0,
    initialNeutral: 0,
    initialBad: 0,
    initialData: 'There is no feedback',
  };

  static propTypes = {};

  state = {
    good: this.props.initialGood,
    neutral: this.props.initialNeutral,
    bad: this.props.initialBad,
  };

  handleGood = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };
  handleNeutral = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };
  handleBad = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
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
          onGood={this.handleGood}
          onNeutral={this.handleNeutral}
          onBad={this.handleBad}
        />
        <h1>Statistics</h1>
        {content}
      </>
    );
  }
}
