import React, { Component } from 'react';
import Section from './Components/Section';
import FeedbackOptions from './Components/FeedbackOptions';
import Statistics from './Components/Statistics';
import Notification from './Components/Notification';
import s from './App.module.css';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = evt => {
    const name = evt.target.name;

    this.setState(prevState => {
      return { [name]: prevState[name] + 1 };
    });
  };

  countTotalFeedback() {
    return this.state.good + this.state.neutral + this.state.bad;
  }

  countPositiveFeedbackPercentage() {
    const total = this.countTotalFeedback();
    if (total) {
      return `${((this.state.good / total) * 100).toFixed(1)}%`;
    }
  }

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <>
        <h1 className={s.header}>Task 1. Feedback form</h1>
        <div className={s.feedbackForm}>
          <Section title="Please leave feedback:">
            <FeedbackOptions
              options={this.state}
              onLeaveFeedback={this.handleClick}
            />
          </Section>
          <Section title="Statistics:">
            {this.countTotalFeedback() ? (
              <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={this.countTotalFeedback()}
                positivePercentage={this.countPositiveFeedbackPercentage()}
              />
            ) : (
              <Notification message="No feedback given" />
            )}
          </Section>
        </div>
      </>
    );
  }
}

export default App;
