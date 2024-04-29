'use client';

import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuItem,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

import {
    Dialog,
    DialogContent,
    DialogClose,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';

import { Input } from '@/components/ui/input';

import { deleteTodo, updateTodoText } from '@/lib/handleTodos';
import { EllipsisVertical } from 'lucide-react';
import { useState } from 'react';

export const OptionsToggle = ({ todo, fetchTodos }) => {

    const [newValue, setNewValue] = useState('');

    return (
        <Dialog>
            <DropdownMenu>
                <DropdownMenuTrigger
                    asChild
                    className='data-[state=open]:bg-accent'>
                    <Button variant='ghost'>
                        <EllipsisVertical className='size-5' />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DialogTrigger asChild>
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                    </DialogTrigger>
                    <DropdownMenuItem
                        className='text-red-800 hover:text-red-700'
                        onClick={() => {
                            deleteTodo(todo.id);
                            fetchTodos();
                        }}>
                        Delete
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Edit todo</DialogTitle>
                </DialogHeader>
                <div className='flex gap-4 py-4 mb-0.5'>
                    <div className='items-center gap-4 w-3/4 mx-auto'>
                        <Input
                            className='w-full overflow placeholder:font-normal'
                            onChange={(e) => setNewValue(e.target.value)}
                        />
                    </div>
                </div>
                <DialogFooter>
                <DialogClose
                        asChild
                        className='w-full'>
                        <Button
                            variant='special'
                            className='w-3/4 mx-auto mb-4'
                            onClick={() => {
                                updateTodoText(newValue, todo.id);
                                fetchTodos();
                                }}>
                            Save changes
                        </Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};