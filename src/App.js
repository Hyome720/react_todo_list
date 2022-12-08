import React, { useState }  from "react"
import "./App.css"
import Lists from "./components/Lists";
import Form from "./components/Form"

export default function App() {

  const [todoData, setTodoData] = useState([])
  const [value, setValue] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    let newTodo = {
      id: Date.now(),
      title: value,
      complete: false,
    }
 
    setTodoData(prev => [...prev, newTodo])
    setValue("")
  }


  return (
    <div className="container">
      <div className="todoBlock">
        <div className="title">
          <h1>할 일 목록</h1>
          <Form handleSubmit={handleSubmit} value={value} setValue={setValue} />
        </div>

        <Lists todoData={todoData} setTodoData={setTodoData} />
      </div>

    </div>
  )
}
