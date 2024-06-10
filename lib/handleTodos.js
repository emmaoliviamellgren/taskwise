import { db } from '@/firebase.config';
import {
    
    getDoc,
    setDoc,
    updateDoc,
    deleteDoc,
    doc,
    arrayUnion
} from 'firebase/firestore';

// FETCH TODOS FROM DATABASE
export const getTodosByUser = async (user) => {
    const userDocRef = doc(db, 'users', user.id);

    try {
        const userDocSnap = await getDoc(userDocRef);

        if (userDocSnap.exists()) {
            
            const userData = userDocSnap.data();

            if (userData.todos && Array.isArray(userData.todos)) {
                // If the todos field exists and is an array, use it
                return userData.todos;
            } else {
                // If the todos field does not exist or is not an array, return an empty array
                console.log('No todos field found or todos is not an array');
                return [];
            }
        } else {
            console.log('No such user document!');
            return []; // Return an empty array if the user document does not exist
        }
    } catch (error) {
        console.error('Error fetching todos:', error);
        return []; // Return an empty array in case of error
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

// Generating timestamp for todo creation
const getTimestamp = () => {
    return new Date();
};

// ADD A NEW TODO TO DATABASE
export const addNewTodo = async (user, inputValue) => {
    try {
        const userDocRef = doc(db, 'users', user.id)
        const userDoc = await getDoc(userDocRef);

        const newTodo = {
            todo: inputValue,
            completed: false,
            createdAt: getTimestamp()
        }

        if (userDoc.exists()) {
            // If the user document exists, append the new todo to the todos array
            await updateDoc(userDocRef, {
                todos: arrayUnion(newTodo)
            });
        } else {
            // If the user document does not exist, create it with the new todo as the first item in the todos array
            await setDoc(userDocRef, {
                name: user.fullName,
                todos: [newTodo]
            });
        }

    } catch (error) {
        console.log('Error adding todo:', error.message);
    }
};

// UPDATE A TODO TEXT
export const updateTodoText = async (newValue, docId) => {
    try {
        const todoRef = doc(db, 'todos', docId);
        await updateDoc(todoRef, {
            todo: newValue,
        });
    } catch (error) {
        console.log('Error updating todo:', error.message);
    }
};

// UPDATE A TODO STATUS
export const updateTodoStatus = async (docId) => {
    try {
        const todoRef = doc(db, 'todos', docId);
        const todoSnap = await getDoc(todoRef);
        const currentStatus = todoSnap.data().completed;
        await updateDoc(todoRef, {
            completed: !currentStatus,
        });
    } catch (error) {
        console.log('Error updating todo status:', error.message);
    }
};

// DELETE A TODO
export const deleteTodo = async (docId) => {
    try {
        await deleteDoc(doc(db, 'todos', docId));
    } catch (error) {
        console.log('Error deleting todo:', error.message);
    }
};
