'use client';

import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

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

export const AddInput = ({
    addToDatabase,
    setInputValue,
    inputValue,
    fetchRandomTodo,
    randomTodo,
    invalidInput
}) => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                <Button
                    variant='dashed'
                    className='w-full h-[70px]'>
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
                            variant='special'
                            className='w-3/4 mx-auto mb-4'
                            onClick={() => {
                                if(inputValue.trim() == '') {
                                    invalidInput()
                                    return
                                }
                                setIsOpen(false);
                                addToDatabase();
                                }}>
                            Add
                        </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default AddInput;
