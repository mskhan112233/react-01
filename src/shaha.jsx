// function Shahab(){
//     function Convert() {
//         return <h1>Shahab</h1>
//     }
//     return (
//         <>
//             <button onClick={Convert}>click</button>
//         </>
//     )
// }
// export default Shahab;
import { useState } from "react";
function Shahab() {
  const [show, setShow] = useState(false);
  

  return (
    <>
      <button onClick={() => setShow(true)}>click</button>
      {show && <h1>Shahab</h1>}
    </>
  );
}

export default Shahab;