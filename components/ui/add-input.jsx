import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const AddInput = () => {
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
                <DialogHeader>
                    <DialogTitle>
                        What do you need to get done today?
                    </DialogTitle>
                </DialogHeader>
                <div className='grid gap-4 py-4'>
                    <div className='grid grid-cols-4 items-center gap-4'>
                        <Input
                            className='col-span-3'
                            placeholder='Add'
                        />
                    </div>
                </div>
                <DialogFooter>
                    <Button type='submit'>Add</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default AddInput;
