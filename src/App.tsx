import React, { useReducer } from "react";
import Counter from "./Components/Counter/Counter";

const App = () => {
  return (
    <div className="App">
      <Counter initialCount={0} />
      <body></body>
    </div>
  );
};

export default App;
