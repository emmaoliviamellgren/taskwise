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
import { useState, useEffect, Fragment } from 'react';

import TodoItem from './todo-item';

const Todos = () => {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const fetchTodos = async () => {
            const fetchedTodos = await getAllTodos();
            setTodos(fetchedTodos);
        };

        fetchTodos();
    }, [todos]);

    // Filtering todos
    const filteredByUncompletedStatus = todos.filter((todo) => !todo.completed);

    const toggleCompleted = (id) => {
        const updatedStatus = todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        );
        setTodos(updatedStatus);
    };

    /*
    The numbers `1`, `-1`, and `0` in the sort function are used to determine the order of the elements in the array.

    - If the function returns a value less than 0 (in this case `-1`), `a` is sorted to an index lower than `b` (i.e., `a` comes first).
    - If the function returns a value greater than 0 (in this case `1`), `a` is sorted to an index higher than `b` (i.e., `b` comes first).
    - If the function returns 0, `a` and `b` remain unchanged with respect to each other, but sorted with respect to all different elements.
     */

    const orderedTodos = [...todos].sort((a, b) => {
        if (a.completed && !b.completed) {
            return 1;
        } else if (!a.completed && b.completed) {
            return -1;
        } else {
            return 0;
        }
    });

    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className='w-[500px]'>
                        My todos{' '}
                        {todos && filteredByUncompletedStatus.length > 0 && (
                            <span className='ml-2 bg-muted/60 p-1 rounded-md text-xs'>
                                {filteredByUncompletedStatus.length}{' '}
                                {filteredByUncompletedStatus.length === 1
                                    ? 'thing'
                                    : 'things'}{' '}
                                to do
                            </span>
                        )}
                    </TableHead>
                    <TableHead className='text-right'>Status</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {orderedTodos.map((todo) => (
                    <Fragment key={todo.id}>
                        <TodoItem
                            todo={todo}
                            toggleCompleted={toggleCompleted}
                        />
                    </Fragment>
                ))}
            </TableBody>
        </Table>
    );
};

export default Todos;
