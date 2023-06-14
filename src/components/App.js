
import React, {useState} from "react";
import './../styles/App.css';

const App = () => {
      let [count, setCount] = useState(0);

       function countClicks(){
          setCount(count+1)
       }

        
        return(
          <div>
              <h1> Button clicked {count} </h1>
              <button onClick={countClicks}>Click me</button>
          </div>
        )
   
  }
export default App
