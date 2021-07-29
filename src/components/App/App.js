import { useState } from "react";
import Wrapper from "../Wrapper/Wrapper";
import Section from "../Section/Section";
import OptionsFeedBack from "../OptionsFeedback/OptionsFeedback";
import Statistics from "../Statistics/Statistics";
import Notification from "../Notification/Notification";

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const addFeedback = (review) => {
    switch (review) {
      case "good":
        setGood((prevState) => prevState + 1);
        break;
      case "neutral":
        setNeutral((prevState) => prevState + 1);
        break;
      case "bad":
        setBad((prevState) => prevState + 1);
        break;

      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    const total = good + neutral + bad;
    return total;
  };

  const countPositiveFeedback = () => {
    const total = countTotalFeedback();
    const persantage = Math.round((100 / total) * good);
    return persantage;
  };

  const options = ["good", "neutral", "bad"];

  return (
    <Wrapper>
      <Section title="Please leave feedback">
        <OptionsFeedBack
          options={options}
          clickFeedback={addFeedback}
        ></OptionsFeedBack>
      </Section>

      <Section title="Statistic">
        {countTotalFeedback() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedback()}
          ></Statistics>
        ) : (
          <Notification message="No feedback given" />
        )}
      </Section>
    </Wrapper>
  );
}

export default App;
// class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

// countTotalFeedback = () => {
//   const total = Object.values(this.state).reduce((acc, el) => acc + el, 0);
//   return total;
// };

// countPositiveFeedback = () => {
//   const total = this.countTotalFeedback();
//   const persantage = Math.round((100 / total) * this.state.good);
//   return persantage;
// };

// addFeedback = (key) => {
//   this.setState((prevState) => ({
//     [key]: prevState[key] + 1,
//   }));
// };

//   render() {
//     const { good, neutral, bad } = this.state;
//     return (
//       <Wrapper>
//         <Section title="Please leave feedback">
//           <OptionsFeedBack
//             options={Object.keys(this.state)}
//             clickFeedback={this.addFeedback}
//           ></OptionsFeedBack>
//         </Section>

//         <Section title="Statistic">
//           {this.countTotalFeedback() ? (
//             <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={this.countTotalFeedback()}
//               positivePercentage={this.countPositiveFeedback()}
//             ></Statistics>
//           ) : (
//             <Notification message="No feedback given" />
//           )}
//         </Section>
//       </Wrapper>
//     );
//   }
// }
