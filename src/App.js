import {useState} from 'react'


const StatisticLine=(props)=>{
  return(
    <table>
      <tbody>
      <tr>
        <td> {props.text} {props.value}</td>
      </tr>
     </tbody>
    </table>
    
  )

}
const Statistics = () =>{
    return(
      <h1>Statistics</h1>
    )
}
const Button = (props) =>{
  return(
    <button onClick={props.onClick}>{props.nature}</button>
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

const total = good + neutral+ bad
const average= ((good*1) + (neutral*0) + (bad*(-1)))/total
if(total == 0){
  return(
    <div>
    <h1>give feedback</h1>
  
    <Button onClick={goodHandler} nature='good'/>
     <Button onClick={neutralHandler} nature='neutral'/>
     <Button onClick={badHandler} nature='bad'/>
     <Statistics/>
     <h3>No feedback given</h3>
     </div>

  )
}
return(
  <div>
    <h1>give feedback</h1>
   
    <Button onClick={goodHandler} nature='good'/>
     <Button onClick={neutralHandler} nature='neutral'/>
     <Button onClick={badHandler} nature='bad'/>
     <Statistics/>
     <div>
      
      <StatisticLine text="good" value={good}/>
      <StatisticLine text="neutral" value={neutral}/>
      <StatisticLine text="bad" value={bad}/>
        <StatisticLine text="all" value={total}/>
        <StatisticLine text="average" value={average}/>
       <StatisticLine text="positive" value={good/total}/>
       
      </div>
  </div>
)
}

export default App;
