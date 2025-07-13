// import KhwazaKhel from "./swat"; 
// import { useState } from "react";
// import College from "./college";

// function User() {
//     let x = 10;
//     let y = 20;
//     let frutes = "banana";
//     let coll = ["firsrt","second","third ","four","sex","seven","eight","nine"]
//     const obj = {
//         name : "muhammad shoaib ",
//         email : "kms47553234@gmail.com",
//         phone : 795,
//         subject : "information technology",
//     }
//     const obj1 = {
//         name1 : "swatkhan",
//         email : "kams948958hsjii",
//         phone : 35343
//     }

//     const [display, setDisplay] = useState(false);
//     const [khan, setkhan] = useState("swtkhan");

//     const handlekhan = () => {
//         setkhan("mskhan");
//     };

//     function fruite() {
//         return "apple";
//     }

//     function sum(a, b) {
//         return a + b;
//     }

//     function operation(a, b, op) {
//         if (op === "+") {
//             return a + b;
//         } else if (op === "-") {
//             return a - b;
//         } else {
//             return a * b;
//         }
//     }

//     return (
//         <div>
//             <button onClick={handlekhan}>Change Name</button>

//             <h1>JSX with curly braces</h1>
//             <h1>This is the value of x: {x}</h1>
//             <h1>x + y = {x + y}</h1>
//             <h1>Fruit from function: {fruite()}</h1>
//             <h1>Fruit variable: {frutes}</h1>
//             <h1>Operation result (30 * 100): {operation(30, 100, " ")}</h1>
//             <input type="text" value={operation(10, 100, "+")} readOnly />
//             <h2>Current state: {khan}</h2>

//             <h1>Toggle Button</h1>
//             <button onClick={() => setDisplay(!display)}>
//                 {display ? "Hide Name" : "Show Name"}
//             </button>

//             {display ? <h1>Muhammad Shoaib</h1> : <KhwazaKhel  obj={obj}/>}
//             <KhwazaKhel obj1={obj1} />
//              <College data={coll} />
//         </div>
//     );
// }
// export function Swat1() {
//     return (
//         <h3>
//             This is a new component. My name is MS Khan, developer, and I work in React.js.
//         </h3>
//     );
// }
// export const khan = function () {
//     return 10 + 10;
// };

// export default User;









import { useState } from "react";
import KhwazaKhel from "./swat"; 
// import College from "./College";

function User() {
  const [display, setDisplay] = useState(false);
  const [khan, setKhan] = useState("swtkhan");

  const handleKhan = () => {
    setKhan("mskhan");
  };

  let x = 10;
  let y = 20;
  let fruits = "banana";
  let colleges = ["first", "second", "third", "four", "six", "seven", "eight", "nine"];

  const obj = {
    name: "Muhammad Shoaib",
    email: "kms47553234@gmail.com",
    phone: 795,
    subject: "Information Technology",
  };

  const obj1 = {
    name: "Swat Khan",
    email: "kams948958hsjii",
    phone: 35343
  };

  function getFruit() {
    return "apple";
  }

  function operation(a, b, op) {
    if (op === "+") return a + b;
    else if (op === "-") return a - b;
    else return a * b;
  }

  return (
    <div>
      <button onClick={handleKhan}>Change Name</button>

      <h1>JSX with curly braces</h1>
      <h1>This is the value of x: {x}</h1>
      <h1>x + y = {x + y}</h1>
      <h1>Fruit from function: {getFruit()}</h1>
      <h1>Fruit variable: {fruits}</h1>
      <h1>Operation result (30 * 100): {operation(30, 100, "*")}</h1>
      <input type="text" value={operation(10, 100, "+")} readOnly />
      <h2>Current state: {khan}</h2>

      <h1>Toggle Button</h1>
      <button onClick={() => setDisplay(!display)}>
        {display ? "Hide Name" : "Show Name"}
      </button>

      {display ? <h1>Muhammad Shoaib</h1> : <KhwazaKhel obj={obj} />}
      <KhwazaKhel obj={obj1} />
      {/* <College data={colleges} /> */}
     
    </div>
  );
}

export function Swat1() {
  return (
    <h3>
      This is a new component. My name is MS Khan, developer, and I work in React.js.
    </h3>
  );
}

export const khan = function () {
  return 10 + 10;
};

export default User;
