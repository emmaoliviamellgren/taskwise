import { db } from '@/firebase.config';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import uuid4 from "uuid4";

// Get collection with todos from DB
export const getAllTodos = async () => {

    let todos = [];

    try {
        const querySnapshot = await getDocs(collection(db, 'todos'));
    
        querySnapshot.forEach(doc => {
            todos.push({...doc.data()})
        });
    
        return todos;
        
    } catch (error) {
        console.log('Could not fetch collection:', error.message)
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
        await addDoc(collection(db, 'todos'), {
            id: uuid4(),
            todo: inputValue,
            completed: false,
        });
    } catch (e) {
        console.error('Error adding document: ', e);
    }
};
