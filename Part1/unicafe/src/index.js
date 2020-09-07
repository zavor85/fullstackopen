import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Display = ({ text }) => <h1>{text}</h1>

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Statistic = ({ text, value }) => {
  return (
  <tr>
    <td style={{backgroundColor: '#7FFFD4', textAlign: 'center'}}>{text}</td>
    <td style={{backgroundColor: '#FFE4C4', textAlign: 'center'}}>{value}</td>        
  </tr>  
)}

const Statistics = ({ stats }) => {

  const averageScore = () => {
    return ((stats[0].good - stats[2].bad) / total).toFixed(2)
  }

  const positiveFeedBacks = () => {
    return (stats[0].good * 100 / total).toFixed(2) + '%'
  }

  let total = 0;
  const statsArr = stats.map(item => {
    let [key, value] = Object.entries(item)[0];
    total += value;
    return <Statistic key={key} text={key} value={value} />;
  });

  let allStats = (
    <>
        {statsArr}
        <Statistic text='All FeedBacks:' value={total}   />
        <Statistic text='Average FeedBacks:' value={averageScore()}  />
        <Statistic text='Positive FeedBacks:' value={positiveFeedBacks()}/>   
    </>
  )

  return (
    <table>
        <tbody>
          {total === 0 ? (
              <tr>
                  <td>No Any FeedBack</td>
              </tr>  ) : (  
              allStats
          )}
        </tbody>
    </table>
  )
}
  


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodFeddBack = () => setGood(good + 1)

  const neutralFeedBack = () => setNeutral(neutral + 1)
  
  const badFeedBack = () => setBad(bad + 1)
  
    return (
      <div>
        <Display text="UniCafe Customers FeedBacks" />
        <Button text='good' handleClick={goodFeddBack} />
        <Button text='neutral' handleClick={neutralFeedBack} />
        <Button text='bad' handleClick={badFeedBack} />
        <Display text='Statistics' />
        <Statistics stats={[{ good }, { neutral }, { bad }]} />    
      </div>
  )
}


ReactDOM.render(
  <App />, 
  document.getElementById('root')
)