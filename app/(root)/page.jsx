import Todos from '../../components/todos.jsx';
import { ModeToggle } from '@/components/mode-toggle.jsx';
import AddInput from '@/components/add-input.jsx';
import User from './@protectedPages/_components/User.jsx';

const Page = () => {

    return (
        <div className='w-screen min-h-screen overflow-x-hidden'>
            <div className='px-4 pt-4 flex justify-between items-center mb-12'>
                <User />
                <ModeToggle />
            </div>
            <main className='flex flex-col justify-center items-center gap-12'>
                <div className='w-[350px] md:w-[550px]'>
                    <AddInput />
                </div>
                <div className="mb-12">
                    <Todos/>
                </div>
            </main>
        </div>
    );
};

export default Page;
