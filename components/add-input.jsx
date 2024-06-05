'use client';

import { Button } from '@/components/ui/button';
import { Plus, CircleAlert } from 'lucide-react';

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
import { useState } from 'react';
import { useTodoContext } from '@/app/(private)/(providers)/TodoContext';

export const AddInput = () => {
    const {
        fetchRandomTodo,
        randomTodo,
        inputValue,
        setInputValue,
        addToDatabase,
    } = useTodoContext();

    const [isOpen, setIsOpen] = useState(false);

    return (
        <Dialog
            open={isOpen}
            onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <Button
                    variant='dashed'
                    className='w-full h-[50px]'>
                    <Plus className='size-4 mr-2' />
                    Add New
                </Button>
            </DialogTrigger>
            <DialogContent className='sm:max-w-[425px]'>
                <DialogHeader className='items-center my-4'>
                    <DialogTitle>
                        What do you need to get done today?
                    </DialogTitle>
                </DialogHeader>
                <div className='flex gap-4 py-4 mb-0.5'>
                    <div className='items-center gap-4 w-3/4 mx-auto'>
                        <Input
                            onFocus={fetchRandomTodo}
                            className='w-full overflow placeholder:font-normal'
                            placeholder={randomTodo && randomTodo.todo}
                            onChange={(e) => setInputValue(e.target.value)}
                            value={inputValue}
                        />
                    </div>
                </div>
                <DialogFooter>
                    <Button
                        disabled={inputValue.trim() == ''}
                        variant='special'
                        className='w-3/4 mx-auto mb-4 disabled:cursor-not-allowed'
                        onClick={() => {
                            setIsOpen(false);
                            addToDatabase();
                        }}>
                        Add
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

export default AddInput;
