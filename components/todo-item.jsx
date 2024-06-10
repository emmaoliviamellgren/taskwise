import { TableCell, TableRow } from '@/components/ui/table';

import { CircleDashed, CircleCheckBig } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { OptionsToggle } from './options-toggle';
import { useTodoContext } from '@/app/(private)/(providers)/TodoContext';

const TodoItem = ({ todo }) => {
    const { toggleCompletedLocally } = useTodoContext();

    return (
        <TableRow>
            <TableCell>
                <AnimatePresence>
                    <motion.span
                        className='flex items-top gap-5'
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.3 }}>
                        {todo.completed ? (
                            <CircleCheckBig
                                className='size-5 transition cursor-pointer'
                                onClick={() => toggleCompletedLocally(todo.id)}
                            />
                        ) : (
                            <CircleDashed
                                className='size-5 transition hover:text-muted-foreground cursor-pointer'
                                onClick={() => toggleCompletedLocally(todo.id)}
                            />
                        )}
                        <p
                            className={`${
                                todo.completed &&
                                'line-through text-muted-foreground'
                            }`}>
                            {todo.todo}
                        </p>
                    </motion.span>
                </AnimatePresence>
            </TableCell>
            <TableCell
                key={todo.completed}
                className='text-right text-muted-foreground'>
                <OptionsToggle todo={todo} />
            </TableCell>
        </TableRow>
    );
};

export default TodoItem;
