import React from "react";
import ReactDOM from "react-dom";

const Greeting = props => {
  console.log(props);
  return (
    <div>
      <p>
        Hello {props.name}, your {props.age} years old
      </p>
    </div>
  );
};

const App = () => {
  const now = new Date();
  const a = 10;
  const b = 20;
  return (
    <div>
      <h1>Hello world </h1>
      <p>The time now is {now.toString()}</p>
      <p>
        The sum of {a} and {b} is {a + b}
      </p>

      <Greeting name="elsie" age="10" />
      <Greeting name="brendah" age="16" />
      <Greeting name="kinshanta" age="21" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
