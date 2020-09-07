import React, { useState } from "react"

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Display = ({ value }) => <div>{value}</div>

const App = (props) => {
  const [value, setValue] = useState(10)
  
  const setToValue = (newValue) => {
    setValue(newValue)
  }
  

  return (
    <div>
      <Display value={value}/>
      <Button text='1000' handleClick={() => setToValue(value + 1000)} />
      <Button text='100' handleClick={() => setToValue(value + 100)} />
      <Button text='0' handleClick={() => setToValue(0)} />
      <Button text='1' handleClick={() => setToValue(value + 1)} />
    </div>
  )
}

export default App