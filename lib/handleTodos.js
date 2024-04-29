import { db } from '@/firebase.config';
import {
    collection,
    getDocs,
    setDoc,
    deleteDoc,
    doc,
} from 'firebase/firestore';
import uuid4 from 'uuid4';

// Get collection with todos from DB
export const getAllTodos = async () => {
    let todos = [];

    try {
        const querySnapshot = await getDocs(collection(db, 'todos'));

        querySnapshot.forEach((doc) => {
            todos.push({ ...doc.data() });
        });

        return todos;
    } catch (error) {
        console.log('Could not fetch collection:', error.message);
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

export const addNewTodo = async (inputValue) => {
    try {
        const id = uuid4();
        await setDoc(doc(db, 'todos', id), {
            id: id,
            todo: inputValue,
            completed: false,
        });
    } catch (error) {
        console.log('Error adding todo:', error.message);
    }
};

export const deleteTodo = async (docId) => {
    try {
        await deleteDoc(doc(db, 'todos', docId))
        
    } catch (error) {
        console.log('Error deleting todo:', error.message);
    }
};
