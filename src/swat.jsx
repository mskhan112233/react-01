// import { useState } from "react";
// function KhwazaKhel(obj,obj1) {
//   const [count, setCount] = useState(0);
//   // console.log(obj.obj.name);
//   console.log(obj.name)
// let name = obj.name;
//   return (
//     <div>
//       <h1>
//         User Component — {obj.name}, Phone: {}, all information detail: {}
//       </h1>
//       <div>
//         <h1>{count}</h1>
//         <button onClick={() => setCount(count + 1)}>Count</button>
//         {count === 0 ? (
//           <h1>Condition 0</h1>
//         ) : count === 1 ? (
//           <h1>Condition 1</h1>
//         ) : count === 2 ? (
//           <h1>Condition 2</h1>
//         ) : (
//           <h1>Other Condition</h1>
//         )}
//       </div>
//     </div>
//   );
// }
// export default KhwazaKhel;





import { useState } from "react";
function KhwazaKhel({ obj }) {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>
        User Component — {obj?.name}, Phone: {obj?.phone}, Email: {obj?.email}
      </h1>
      <div>
        <h1>{count}</h1>
        <button onClick={() => setCount(count + 1)}>Count</button>
        {count === 0 ? (
          <h1>Condition 0</h1>
        ) : count === 1 ? (
          <h1>Condition 1</h1>
        ) : count === 2 ? (
          <h1>Condition 2</h1>
        ) : (
          <h1>Other Condition</h1>
        )}
      </div>
    </div>
  );
}
export default KhwazaKhel;
