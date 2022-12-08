import React from 'react'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'

export default function Lists({ todoData, setTodoData }) {

  const btnStyle = {
    color: 'pink',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '58%',
    cursor: 'pointer',
    float: 'right',
  }

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

  const getStyle = (completed) => {
    return {
      padding: '10px',
      borderBottom: '1px #ccc dotted',
      textDecoration: completed ? 'line-through' : 'none',
    }
  };
  
  const handleEnd = (result) => {
    console.log(result)

    if (!result.destination) return

    const newTodoData = [...todoData]

    const [reorderedItem] = newTodoData.splice(result.source.index, 1)

    newTodoData.splice(result.destination.index, 0, reorderedItem)
    setTodoData(newTodoData)    
  }

  return (
    <div>
      <DragDropContext onDragEnd={handleEnd}>
        <Droppable droppableId='todo'>
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {todoData.map((data, index) => (
                <Draggable
                  key={data.id}
                  draggableId={data.id.toString()}
                  index={index}
                >
                  {(provided) => (
                    <div style={getStyle(data.completed)} key={data.id} {...provided.draggableProps} ref={provided.innerRef} {...provided.dragHandleProps}>
                      <div>
                        <input
                          type="checkbox"
                          defaultChecked={false}
                          onChange={() => handleCompleteChange(data.id)}
                        />
                        <span className={data.completed ? 'line-through' : undefined }>{data.title}</span>
                      </div>
                      <div>
                        <button style={btnStyle} onClick={() => handleClick(data.id)}>
                          x
                        </button>
                      </div>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  ) 
}
