'use client';

import Todos from '../../components/todos.jsx';
import { Search } from 'lucide-react';

import { Input } from '@/components/ui/input.jsx';
import { ModeToggle } from '@/components/mode-toggle.jsx';
import AddInput from '@/components/add-input.jsx';

const Page = () => {

    return (
        <div className='w-screen min-h-screen overflow-x-hidden'>
            <div className='pr-4 pt-4 flex justify-end mb-12'>
                <ModeToggle />
            </div>
            <main className='flex flex-col justify-center items-center gap-12'>
                <div className='w-[350px] md:w-[550px]'>
                    <AddInput />
                </div>
                <div>
                    <Todos />
                </div>
            </main>
        </div>
    );
};

export default Page;
