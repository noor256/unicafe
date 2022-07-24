import {useState} from 'react'

const Statistics = () =>{
    return(
      <h1>Statistics</h1>
    )
}

const App = () => {
const [good, setGood] = useState(0)
const [neutral, setNeutral] = useState(0)
const [bad, setBad] =useState(0)

const goodHandler=()=>{

   setGood(good + 1)
}

const neutralHandler=()=>{
  
   setNeutral(neutral + 1)
}
const badHandler=()=>{
  
   setBad(bad + 1)
}
return(
  <div>
    <h1>give feedback</h1>
    <button onClick={goodHandler}>good</button>
     <button onClick={neutralHandler}>neutral</button>
     <button onClick={badHandler}>bad</button>
     <Statistics/>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
  </div>
)
}

export default App;
