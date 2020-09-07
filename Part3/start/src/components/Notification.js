import React, { useEffect } from 'react'


const Notification = ({ message, setMessage, messageType, setMessageType }) => {
  const messageNotification = () => {
    if (message) {
      const messageTimer = setTimeout(() => {
        setMessage(null)
        setMessageType('')
      }, 5000)
      return () => clearTimeout(messageTimer)
    }
  }
useEffect(messageNotification, [message])


  return (
    message ?
      <div className={messageType}>
        {message}
      </div> :
      null
  )
}

export default Notification