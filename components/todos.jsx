'use client';

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import { getAllTodos } from '@/lib/handleTodos';
import { useState, useEffect } from 'react';

import { CircleDashed } from 'lucide-react';


const Todos = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const fetchTodos = async () => {
            const fetchedTodos = await getAllTodos();
            setTodos(fetchedTodos);
        };

        fetchTodos();
    }, []);

    const toggleCompleted = (id) => {
        todos.todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo)
    }

    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className='w-[500px]'>
                        My todos{' '}
                        <span className='ml-2 bg-muted/60 p-1 rounded-md text-xs'>
                            {todos.todos && todos.todos.length} things to do
                        </span>
                    </TableHead>
                    <TableHead className='text-right'>Status</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {todos.todos?.map((todo) => (
                    <TableRow key={todo.todo}>
                        <TableCell
                            key={todo.id}
                            className='font-medium flex items-top gap-5'>
                                <span><input type="checkbox" checked={todo.completed} className='size-4 hover:text-white cursor-pointer' onChange={() => toggleCompleted(todo.id)}/></span>
                            {todo.todo}
                        </TableCell>
                        <TableCell
                            key={todo.completed}
                            className='text-right text-muted-foreground'>
                            {todo.completed ? 'Completed' : 'Not Completed'}
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

export default Todos;
