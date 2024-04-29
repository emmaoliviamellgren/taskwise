'use client';

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';

import { useEffect, Fragment } from 'react';
import TodoItem from './todo-item';

const Todos = ({ todos, reloadTodos, fetchTodos, toggleCompleted }) => {
    
    useEffect(() => {
        fetchTodos();
    }, [reloadTodos]);

    // FILTER TODOS BY STATUS
    const filteredByUncompletedStatus = todos.filter((todo) => !todo.completed);

    // ORDER TODOS BY STATUS
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
                            fetchTodos={fetchTodos}
                        />
                    </Fragment>
                ))}
            </TableBody>
        </Table>
    );
};

export default Todos;
