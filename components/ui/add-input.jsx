"use client"

import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { getRandomTodo, addNewDocument } from '@/lib/handleTodos';
import { useState, useEffect } from 'react';


export const AddInput = () => {

    const [randomTodo, setRandomTodo] = useState([])
    const [inputValue, setInputValue] = useState('');

    const fetchTodo = async () => {
        const fetchedTodo = await getRandomTodo();
        setRandomTodo(fetchedTodo);
    };

    useEffect(() => {
        fetchTodo()
    }, []);

    const addToDatabase = async () => {
        try {
            await addNewDocument(inputValue);
            console.log(inputValue)
            setInputValue('');
        } catch (error) {
            console.error('Error adding document: ', error);
        }
    };

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button
                    variant='dashed'
                    className='w-full h-[70px]'>
                    <Plus className='size-4 mr-2' />
                    Add New
                </Button>
            </DialogTrigger>
            <DialogContent className='sm:max-w-[425px]'>
                <DialogHeader className="items-center my-4">
                    <DialogTitle>
                        What do you need to get done today?
                    </DialogTitle>
                </DialogHeader>
                <div className='flex gap-4 py-4 mb-0.5'>
                    <div className='items-center gap-4 w-3/4 mx-auto'>
                        <Input
                            onFocus={fetchTodo}
                            className='w-full overflow placeholder:font-normal'
                            placeholder={randomTodo && randomTodo.todo}
                            onChange={e => setInputValue(e.target.value)}
                value={inputValue}
                        />
                    </div>
                </div>
                <DialogFooter>
                    <Button variant="special" className="w-3/4 mx-auto mb-4" onClick={addToDatabase}>Add</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default AddInput;
