'use client';

import {
    Table,
    TableBody,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';

import { useEffect, Fragment } from 'react';
import TodoItem from './todo-item';
import {
    useTodoContext,
    fetchTodos,
} from '@/app/(root)/(providers)/TodoContext';

const Todos = () => {
    const { reloadTodos, todos, fetchTodos } = useTodoContext();

    useEffect(() => {
        fetchTodos();
    }, [reloadTodos]);

    // FILTER TODOS BY STATUS
    const filteredByUncompletedStatus = todos.filter((todo) => !todo.completed);


    // ORDER TODOS BY STATUS AND CREATION TIME
    const orderedTodos = [...todos].sort((a, b) => {
        if (a.completed && !b.completed) {
            return 1;
        } else if (!a.completed && b.completed) {
            return -1;
        } else {
            // If both todos have the same completion status, sort by creation time
            return b.createdAt - a.createdAt;
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
                </TableRow>
            </TableHeader>
            <TableBody>
                {orderedTodos.map((todo) => (
                    <Fragment key={todo.id}>
                        <TodoItem
                            todo={todo}
                        />
                    </Fragment>
                ))}
            </TableBody>
        </Table>
    );
};

export default Todos;
