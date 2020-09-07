import React from 'react'

const Total = ({ parts }) => {
  const totalSum = parts.reduce((prev, current) => {
    return prev + current.exercises
  }, 0)
  return <strong>Total of {totalSum} exercises</strong>
}

export default Total