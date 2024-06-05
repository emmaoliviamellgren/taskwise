'use client';

import {
    updateTodoStatus,
    getRandomTodo,
    getAllTodos,
    addNewTodo,
} from '@/lib/handleTodos';
import { createContext, useContext, useState } from 'react';

export const TodoContext = createContext();

const TodoContextProvider = ({ children }) => {
    const [todos, setTodos] = useState([]);
    const [reloadTodos, setReloadTodos] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [randomTodo, setRandomTodo] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const [error, setError] = useState('');

    const invalidInput = () => {
        setError('You must input a todo');
        console.log('Invalid input');
    };

    // FETCH RANDOM TODOS FOR INSPIRATION IN INPUT BOX
    const fetchRandomTodo = async () => {
        const fetchedTodo = await getRandomTodo();
        setRandomTodo(fetchedTodo);
    };

    // FETCH ALL TODOS
    const fetchTodos = async () => {
        const fetchedTodos = await getAllTodos();
        setTodos(fetchedTodos);
    };

    // TOGGLE A TODO AS COMPLETED
    const toggleCompleted = async (id) => {
        const updatedStatus = todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        );
        await updateTodoStatus(id);
        setTodos(updatedStatus);
    };

    // ADD A NEW TODO
    const addToDatabase = async () => {
        try {
            await addNewTodo(inputValue);
            setInputValue('');
            setReloadTodos((prev) => !prev);
        } catch (error) {
            console.error('Error adding document: ', error);
        }
    };

    const value = {
        addToDatabase,
        toggleCompleted,
        fetchTodos,
        fetchRandomTodo,
        invalidInput,
        todos,
        setTodos,
        reloadTodos,
        setReloadTodos,
        inputValue,
        setInputValue,
        randomTodo,
        setRandomTodo,
        isOpen,
        setIsOpen,
        error,
        setError,
    };

    return (
        <TodoContext.Provider value={value}>{children}</TodoContext.Provider>
    );
};

export default TodoContextProvider;

export const useTodoContext = () => {
    const context = useContext(TodoContext);
    if (!context)
        throw new Error(
            'useTodoContext must be used inside an TodoContextProvider'
        );
    return context;
};
