import Todos from '../../components/todos.jsx'
import { Input } from '@/components/ui/input.jsx'
import { ModeToggle } from '@/components/mode-toggle.jsx'
import AddInput from '@/components/ui/add-input.jsx'

const page = () => {  
  
  return (
    <div className='w-screen min-h-screen'>
      <div className='pr-4 pt-4 flex justify-end'><ModeToggle /></div>
      <main className="flex flex-col justify-center items-center gap-6">
        <AddInput />
        <div className='w-[400px]'><Input /></div>
        <div><Todos /></div>
      </main>
    </div>
  )
}

export default page