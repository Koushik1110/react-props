import Child from "./components/child";
import { useState } from "react";
import Counter from "./components/counter";

// const App = () => {
//   const [message, setMessage] = useState(""); //state declaration

//   //state bypassing
//   return <Child message={message} setMessage={setMessage}/>;
// };
const App = () => {
  return <Counter/>;
};

export default App;
