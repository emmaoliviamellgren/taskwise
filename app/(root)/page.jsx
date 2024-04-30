'use client';

import Todos from '../../components/todos.jsx';
import { Search } from 'lucide-react';

import { Input } from '@/components/ui/input.jsx';
import { ModeToggle } from '@/components/mode-toggle.jsx';
import AddInput from '@/components/ui/add-input.jsx';

const Page = () => {

    return (
        <div className='w-screen min-h-screen'>
            <div className='pr-4 pt-4 flex justify-end'>
                <ModeToggle />
            </div>
            <main className='flex flex-col justify-center items-center gap-2'>
                <div className='w-[400px]'>
                    <AddInput />
                </div>
                <div className='w-[400px] mb-12'>
                    <Search className='relative top-[30px] left-2 text-muted-foreground/90 size-5' />
                    <Input
                        className='pl-9 pr-3'
                        placeholder='Search'
                    />
                </div>
                <div>
                    <Todos />
                </div>
            </main>
        </div>
    );
};

export default Page;
