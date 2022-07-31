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
      ...prevState,
      ...{ [e.target.textContent]: prevState[e.target.textContent] + 1 },
    }));
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    console.log(good + neutral + bad);
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
        <h2 className={style.title}>Please leave your feedback</h2>
        <FeedbackOptions
          options={(good, neutral, bad)}
          onLeaveFeedback={this.countFeedback}
        ></FeedbackOptions>
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

// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
