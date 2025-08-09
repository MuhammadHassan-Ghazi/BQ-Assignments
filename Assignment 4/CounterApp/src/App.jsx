import './App.css'
// import Greet from './components/hello'



// function App() {
//   return (
//     <>
//       <Greet />
//     </>
//   )
// }

// export default App

// // only export without default must be import with {}
// import {HelloWorld} from './components/hello'

// function App() {
//   return (
//     <>
//       <HelloWorld />
//     </>
//   )
// }

// export default App

import { useState } from "react"

function App() {
  let [count, setcount] = useState(0);
  return (
    <>
      <h1>Count : {count}</h1>
      <button onClick={()=>{setcount(count + 1)}}>Increment</button>
      <button onClick={()=>{setcount(count - 1 < 0 ? 0 : count - 1)}}>Decrement</button>
      <button onClick={()=>{setcount(count + 5)}}>Increment by 5</button>
      <button onClick={()=>{setcount(count - 5 < 0 ? 0 : count - 5)}}>Decrement by 5</button>
      <button onClick={()=>{setcount(0)}}>Reset</button>
    </>
  )
}
export default App