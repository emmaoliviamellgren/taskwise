import Todos from '../../components/todos.jsx'
import { Input } from '@/components/ui/input.jsx'
import { ModeToggle } from '@/components/mode-toggle.jsx'

const page = () => {  
  
  return (
    <div className='w-screen min-h-screen bg-slate-900/70'>
      <ModeToggle />
      <main className="flex flex-col justify-center items-center  gap-24">
        <div><Input /></div>
        <div className=''><Todos /></div>
      </main>
    </div>
  )
}

export default page