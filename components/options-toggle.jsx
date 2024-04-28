'use client';

import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuItem,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import { deleteTodo } from '@/lib/handleTodos';
import { EllipsisVertical } from 'lucide-react';

export const OptionsToggle = ({ todo }) => {

    return (
        <DropdownMenu>
            <DropdownMenuTrigger
                asChild
                className='data-[state=open]:bg-accent'>
                <Button variant='ghost'>
                    <EllipsisVertical className='size-5' />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
                align='end'
                className='w-28'>
                <DropdownMenuItem>Edit</DropdownMenuItem>
                <DropdownMenuItem
                    className='text-red-800 hover:text-red-700'
                    onClick={() => deleteTodo(todo.id)}>
                    Delete
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};
