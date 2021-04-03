import React, { useEffect, useState } from 'react'
import './App.css'
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import Message from './Message';


function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    {username : 'Himanshu' , text : "Hi"}, 
    {username : 'Pinki', text : 'Hlw'}
  ])
  const [username, setUsername] = useState('')

  useEffect(() => {
    setUsername(prompt('Please Enter Your Name : '))
    
  }, [])

  const sendMessage = (event) =>{
    
    event.preventDefault()
    setMessages([...messages, {username: username, text: input}])
    setInput('')
  }
  // console.log(input)
  // console.log(messages)
  return (
    <div className ="App">
      <h1>Hello, {username} : Welcome to the chat Box</h1>
      <form>
        <FormControl>
          <InputLabel>Enter a messages...</InputLabel>
          <Input value = {input} onChange={event => setInput(event.target.value)}/>
          <Button disabled ={!input} variant="contained" color="primary" type= "submit" onClick = {sendMessage}>Send Message</Button>
        </FormControl>
      </form>
      {
        messages.map(message =>(
          <Message username={message.username} text = {message.text}/>
        ))
      }
    </div>
  )
}

export default App
