import React from 'react'

const Content = ({ parts }) => {
  return parts.map(item => <p key={item.id}>{item.name} {item.exercises}</p>
  )
}

export default Content