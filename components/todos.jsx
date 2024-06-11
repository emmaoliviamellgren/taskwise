'use client';

import {
    Table,
    TableBody,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';

import { Fragment } from 'react';
import TodoItem from './todo-item';
import { useTodoContext } from '@/app/(private)/(providers)/TodoContext';

const Todos = () => {
    const { todos } = useTodoContext();

    // FILTER TODOS BY STATUS
    const filteredByUncompletedStatus = todos.filter((todo) => !todo.completed);

    // ORDER TODOS BY STATUS AND CREATION TIME
    const orderedTodos = [...todos].sort((a, b) => {
        if (a.completed && !b.completed) {
            return 1;
        } else if (!a.completed && b.completed) {
            return -1;
        } else {
            return b.createdAt - a.createdAt;
        }
    });
    console.log(todos, orderedTodos)

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
                    <TableHead></TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {todos && todos.length === 0 && (
                    <TableRow>
                        <td className='text-center text-sm font-semibold text-muted-foreground py-6' colSpan='2'>
                            No todos yet! Start by adding one above.
                        </td>
                    </TableRow>
                )}
                {orderedTodos.map((todo) => (
                    <Fragment key={todo.id}>
                        <TodoItem todo={todo} />
                    </Fragment>
                ))}
            </TableBody>
        </Table>
    );
};

export default Todos;
