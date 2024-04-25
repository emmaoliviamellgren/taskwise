import Todos from './Todos.jsx'

const page = () => {  
  
  return (
    <div className="h-screen w-screen flex justify-center bg-slate-900">
      <h1 className="mt-20 text-3xl font-semibold">My todos</h1>
      <div><Todos /></div>
      </div>
  )
}

export default page