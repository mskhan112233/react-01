// import logo from './logo.svg';
// import './App.css';
// import User,{khan,Swat1} from './new';
// import  KhwazaKhel  from "./swat";
// import { useState } from "react";

import User, { khan, Swat1 } from "./new";


// function App() {
//   return (
//     <>
//     <h1> muhammad shoaib</h1>
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
        
//         </a>
//         <h1>
//             {khan}
//         </h1>
//         <h1>
//           {Swat1}
//         </h1>
//       </header>
//       <User/>
//         {/* <KhwazaKhel /> */}
//     </div>
//     </>
//   );
// }

// export default App;





// import './App.css';

function App() {
  return (
    <>
      <h1>Muhammad Shoaib</h1>
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <h1>{khan()}</h1>
          <Swat1 />
        </header>
        <User />
      </div>
    </>
  );
}

export default App;
