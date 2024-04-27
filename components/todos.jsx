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

const Todos = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const fetchTodos = async () => {
            const fetchedTodos = await getAllTodos();
            setTodos(fetchedTodos);
        };

        fetchTodos();
    }, []);

    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className='w-[300px]'>
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
                            className='font-medium'>
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
