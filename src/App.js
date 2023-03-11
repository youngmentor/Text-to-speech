import "./App.css"
import { useState } from "react"

function App() {
  const [ourText, setOurText] = useState("")
  const msg = new SpeechSynthesisUtterance()

  const speechHandler = (msg) => {
    msg.text = ourText
    window.speechSynthesis.speak(msg)
  }

  return (
    <div className='App'>
      <h1>React Text to Speech App</h1>
      <textarea
        rows="10"
        value={ourText}
        placeholder='Enter Text'
        onChange={(e) => setOurText(e.target.value)}
      ></textarea>
      <button onClick={() => speechHandler(msg)} className="Speak_Bttn">SPEAK</button>
    </div>
  )
}

export default App


