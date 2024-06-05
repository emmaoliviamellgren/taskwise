import Todos from '../../components/todos.jsx';
import AddInput from '@/components/add-input.jsx';
import Header from '@/components/header.jsx';

const UserPage = () => {
    return (
        <div className='w-screen min-h-screen overflow-x-hidden'>
            <Header />
            <main className='flex flex-col justify-center items-center gap-12'>
                <div className='w-[350px] md:w-[550px]'>
                    <AddInput />
                </div>
                <div className='mb-12'>
                    <Todos />
                </div>
            </main>
        </div>
    );
};

export default UserPage;
