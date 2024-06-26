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

import { deleteTodoInDB, updateTodoInDB } from '@/lib/handleTodos';
import { EllipsisVertical } from 'lucide-react';
import { useState } from 'react';
import { useTodoContext } from '@/app/(private)/(providers)/TodoContext';
import { useUser } from '@clerk/nextjs';

export const OptionsToggle = ({ todo }) => {
    const { fetchTodosForUser } = useTodoContext();
    const { user } = useUser();

    const [newValue, setNewValue] = useState('');
    const [isOpen, setIsOpen] = useState(false);

    const updateTodo = async () => {
        const updatedValue = { ...todo, todo: newValue };
        await updateTodoInDB(user, updatedValue);
        fetchTodosForUser();
        setIsOpen(false);
    };

    const deleteTodo = async () => {
        await deleteTodoInDB(user, todo);
        fetchTodosForUser();
    };

    return (
        <Dialog
            open={isOpen}
            onOpenChange={setIsOpen}>
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
                        <DropdownMenuItem className='cursor-pointer'>
                            Edit
                        </DropdownMenuItem>
                    </DialogTrigger>
                    <DropdownMenuItem
                        className='text-red-800 hover:text-red-700 cursor-pointer'
                        onClick={deleteTodo}>
                        Delete
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
            <DialogContent className='sm:max-w-[425px]'>
                <DialogHeader className='items-center my-4'>
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
                    <Button
                        disabled={newValue.trim() == ''}
                        variant='special'
                        className='w-3/4 mx-auto mb-4 disabled:cursor-not-allowed'
                        onClick={updateTodo}>
                        Save changes
                    </Button>
                    <Button
                        variant='outline'
                        className='w-3/4 mx-auto mb-4 sm:hidden text-muted-foreground'
                        onClick={() => {
                            setIsOpen(false);
                        }}>
                        Cancel
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};
