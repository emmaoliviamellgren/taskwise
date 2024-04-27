import AddInput from '@/components/ui/add-input';
import { db } from '@/firebase.config';
import { collection, addDoc } from 'firebase/firestore';

export const getAllTodos = async () => {
    let todos = [];

    try {
        const res = await fetch('https://dummyjson.com/todos?limit=10');
        todos = await res.json();

        return todos;
    } catch (error) {
        console.log(error.message);
    }
};

export const getRandomTodo = async () => {
    try {
        const res = await fetch('https://dummyjson.com/todos/random');
        const randomTodo = await res.json();

        return randomTodo;
    } catch (error) {
        console.log(error.message);
    }
};

export const addNewDocument = async (inputValue) => {
    try {
        const newDoc = await addDoc(collection(db, 'todos'), {
            id: 2,
            todo: inputValue,
            completed: false,
        });
        console.log(newDoc);
    } catch (e) {
        console.error('Error adding document: ', e);
    }
};
