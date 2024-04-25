
const Todos = async () => {
  
    const res = await fetch('https://dummyjson.com/todos')
    const todos = await res.json()
  
  return (
    <>
      {todos.map(todo => (<p key={todo.id}>{todo.todo}</p>))}   
    </> 
  )
}

export default Todos