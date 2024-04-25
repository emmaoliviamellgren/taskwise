
const Todos = async () => {
  
    const res = await fetch('https://dummyjson.com/todos?limit=10')
    const todos = await res.json()
  
  return (
    <ul className="">
      {todos.todos?.map(todo => (
        <li key={todo.id} className="my-6">{todo.todo}</li>
      ))}
    </ul> 
  )
}

export default Todos