import { db } from '@/firebase.config';
import {
    collection,
    getDocs,
    getDoc,
    setDoc,
    updateDoc,
    deleteDoc,
    doc,
    serverTimestamp
} from 'firebase/firestore';
import uuid4 from 'uuid4';

// FETCH TODOS FROM DATABASE
export const getAllTodos = async () => {
    let todos = [];
    
    try {
        const querySnapshot = await getDocs(collection(db, 'todos'));
        
        querySnapshot.forEach((doc) => {
            const todo = doc.data();
            todo.createdAt = todo.createdAt.toMillis();
            todos.push(todo);
        });
        
        return todos;
    } catch (error) {
        console.log('Could not fetch collection:', error.message);
    }
};

// FETCH RANDOM TODOS FROM DUMMY JSON
export const getRandomTodo = async () => {
    try {
        const res = await fetch('https://dummyjson.com/todos/random');
        const randomTodo = await res.json();
        
        return randomTodo;
    } catch (error) {
        console.log(error.message);
    }
};

// ADD A NEW TODO TO DATABASE
export const addNewTodo = async (inputValue) => {
    try {
        const id = uuid4();
        await setDoc(doc(db, 'todos', id), {
            id: id,
            todo: inputValue,
            completed: false,
        createdAt: serverTimestamp()
        });
        // const newTodo = {
        //     id: id,
        //     todo: inputValue,
        //     completed: false,
        //     createdAt: Date.now()
        // };
        // await setDoc(doc(db, 'todos', id), newTodo);
        // return newTodo;
    } catch (error) {
        console.log('Error adding todo:', error.message);
    }
};

// UPDATE A TODO TEXT
export const updateTodoText = async(newValue, docId) => {
    try {
        const todoRef = doc(db, 'todos', docId);
        await updateDoc(todoRef, {
            todo: newValue
        });
        
    } catch (error) {
        console.log('Error updating todo:', error.message);
    }
}

// UPDATE A TODO STATUS
export const updateTodoStatus = async(docId) => {
    try {
        const todoRef = doc(db, 'todos', docId);
        const todoSnap = await getDoc(todoRef);
        const currentStatus = todoSnap.data().completed;
        await updateDoc(todoRef, {
            completed: !currentStatus
        });
        
    } catch (error) {
        console.log('Error updating todo status:', error.message);
    }
}

// DELETE A TODO
export const deleteTodo = async (docId) => {
    try {
        await deleteDoc(doc(db, 'todos', docId))
        
    } catch (error) {
        console.log('Error deleting todo:', error.message);
    }
};
