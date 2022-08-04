import React from 'react';
import style from 'components/App.module.css';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Statistic from './Statistic/Statistic';
import Notification from './Notification/Notification';

export class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countFeedback = e => {
    this.setState(prevState => ({
      [e.target.textContent]: (prevState[e.target.textContent] + 1)
    }
    ))
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage() {
    const { good, bad, neutral } = this.state;
    let resPercent = (good / (good + bad + neutral)) * 100;
    return Math.round(resPercent);
  }

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div className={style.container}>
        <Section title="Please leave your feedback">
        <FeedbackOptions
            options={Object.keys(this.state)}
          
          onLeaveFeedback={this.countFeedback}
        />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() === 0 ? (
            <Notification message="No feedback given" />
          ) : (
            <Statistic
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          )}
        </Section>
      </div>
    );
  }
}

export default App;


