import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';

const Todos = async () => {
    const res = await fetch('https://dummyjson.com/todos?limit=10');
    const todos = await res.json();

    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className='w-[300px]'>My todos <span className='ml-2 bg-muted/60 p-1 rounded-md text-xs'>{todos.todos.length} things to do</span></TableHead>
                    <TableHead className='text-right'>Status</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {todos.todos?.map((todo) => (
                    <TableRow key={todo.id}>
                        <TableCell
                            key={todo.id}
                            className='font-medium'>
                            {todo.todo}
                        </TableCell>
                        <TableCell
                            key={todo.id}
                            className='text-right text-muted-foreground'>
                            {todo.completed ? 'Completed' : 'Not Completed'}
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

export default Todos;
