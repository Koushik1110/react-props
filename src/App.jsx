// import Child from "./components/child";
import { useState } from "react";
// import Counter from "./components/counter";

import Colors from "./components/colors";

// // const App = () => {
// //   const [message, setMessage] = useState(""); //state declaration

// //   //state bypassing
// //   return <Child message={message} setMessage={setMessage}/>;
// // };

// // const App = () => {
// //   const [count, setCount] = useState(0);
// //   return (
// //     <div>
// //       <p>Count: {count}</p>
// //       <Counter count={count} setCount={setCount} />;
// //     </div>
// //   );
// // };

// export default App;

//Multi stage mutation

// const App = () => {
//   const [color, setColor] = useState("red");
//   return (
//     <div>
//       <button onClick={() => setColor("red")}>Change color from App</button>
//       <Colors color={color} setColor={setColor} />
//     </div>
//   );
// };

import ParentComp from "./components/ParentComp";
import ChildComp from "./components/ChildComp";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div>
      <ParentComp isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}>
        <ChildComp />
      </ParentComp>
    </div>
  );
};

export default App;
