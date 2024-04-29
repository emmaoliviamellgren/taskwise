'use client';

import Todos from '../../components/todos.jsx';
import { Search } from 'lucide-react';
import { useState } from 'react';

import { Input } from '@/components/ui/input.jsx';
import { ModeToggle } from '@/components/mode-toggle.jsx';
import AddInput from '@/components/ui/add-input.jsx';
import { addNewTodo, getAllTodos, getRandomTodo } from '@/lib/handleTodos.js';

const Page = () => {
    const [todos, setTodos] = useState([]);
    const [reloadTodos, setReloadTodos] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [randomTodo, setRandomTodo] = useState([]);

    const fetchRandomTodo = async () => {
        const fetchedTodo = await getRandomTodo();
        setRandomTodo(fetchedTodo);
    };

    const fetchTodos = async () => {
        const fetchedTodos = await getAllTodos();
        setTodos(fetchedTodos);
    };

    const toggleCompleted = (id) => {
        const updatedStatus = todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        );
        setTodos(updatedStatus);
    };

    const addToDatabase = async () => {
        try {
            await addNewTodo(inputValue);
            setInputValue('');
            setReloadTodos((prev) => !prev); // Toggle `reload` to trigger a re-fetch
        } catch (error) {
            console.error('Error adding document: ', error);
        }
    };

    return (
        <div className='w-screen min-h-screen'>
            <div className='pr-4 pt-4 flex justify-end'>
                <ModeToggle />
            </div>
            <main className='flex flex-col justify-center items-center gap-2'>
                <div className='w-[400px]'>
                    <AddInput
                        addToDatabase={addToDatabase}
                        setInputValue={setInputValue}
                        inputValue={inputValue}
                        fetchRandomTodo={fetchRandomTodo}
                        randomTodo={randomTodo}
                    />
                </div>
                <div className='w-[400px] mb-12'>
                    <Search className='relative top-[30px] left-2 text-muted-foreground/90 size-5' />
                    <Input
                        className='pl-9 pr-3'
                        placeholder='Search'
                    />
                </div>
                <div>
                    <Todos
                        todos={todos}
                        reloadTodos={reloadTodos}
                        fetchTodos={fetchTodos}
                        toggleCompleted={toggleCompleted}
                    />
                </div>
            </main>
        </div>
    );
};

export default Page;
