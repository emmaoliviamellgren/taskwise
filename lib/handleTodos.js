export const getAllTodos = async () => {

    let todos = []
    
    try {
        const res = await fetch('https://dummyjson.com/todos?limit=10');
        todos = await res.json();
        
        return todos
        
    } catch (error) {
        console.log(error.message)
    }
}

const getRandomTodo = async () => {
    try {
        const res = await fetch('https://dummyjson.com/todos/random');
        const randomTodo = await res.json();
        
        return randomTodo
        
    } catch (error) {
        console.log(error.message)
    }
}
