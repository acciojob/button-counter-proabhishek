
import React, {useState} from "react";
import './../styles/App.css';

const App = () => {

      let [count, setCount] = useState(0);
      

     return(
      <div>
           <h1>Button clicked {count}</h1>
           <button onClick={()=>setCount(count+1)}>Click Me </button>
      </div>
     )
  }
export default App
