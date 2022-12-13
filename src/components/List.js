import React from 'react'

const List = ({id, title, completed, todoData, setTodoData, provided}) => {

  const handleCompleteChange = (id) => {
    let newTodoData = todoData.map(data => {
      if(data.id === id) {
        data.completed = !data.completed
      } 
      return data
    })
    
    setTodoData(newTodoData)
  }
  
  const handleClick = (id) => {
    let newTodoData = todoData.filter((data) => data.id !== id)
    setTodoData(newTodoData)
  }
  return (
    <div key={id} {...provided.draggableProps} ref={provided.innerRef} {...provided.dragHandleProps}>
                      <div>
                        <input
                          type="checkbox"
                          defaultChecked={false}
                          onChange={() => handleCompleteChange(id)}
                        />
                        <span className={completed ? 'line-through' : undefined }>{title}</span>
                      </div>
                      <div>
                        <button onClick={() => handleClick(id)}>
                          x
                        </button>
                      </div>
                    </div>
  )
}

export default List