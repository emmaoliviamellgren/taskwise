import { db } from '@/firebase.config';
import { getDoc, setDoc, updateDoc, doc, arrayUnion } from 'firebase/firestore';
import uuid4 from 'uuid4';

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

// UPDATE A TODO STATUS
export const toggleCompletedInDB = async (user, updatedTodos) => {
    try {
        const userDocRef = doc(db, 'users', user.id);
        await updateDoc(userDocRef, { todos: updatedTodos });
    } catch (error) {
        console.log('Error updating todo status:', error.message);
    }
};

// ADD A NEW TODO
export const addNewTodoInDB = async (user, inputValue) => {
    try {
        const userDocRef = doc(db, 'users', user.id);
        const userDoc = await getDoc(userDocRef);

        const newTodo = {
            todo: inputValue,
            id: uuid4(),
            completed: false,
            createdAt: getTimestamp(),
        };

        if (userDoc.exists()) {
            // If the user document exists, append the new todo to the todos array
            await updateDoc(userDocRef, {
                todos: arrayUnion(newTodo),
            });
        } else {
            // If the user document does not exist, create it with the new todo as the first item in the todos array
            await setDoc(userDocRef, {
                name: user.fullName,
                todos: [newTodo],
            });
        }
    } catch (error) {
        console.log('Error adding todo:', error.message);
    }
};

// UPDATE A TODO
export const updateTodoInDB = async (user, updatedValue) => {
    const userDocRef = doc(db, 'users', user.id);
    const userDoc = await getDoc(userDocRef);

    if (userDoc.exists() && Array.isArray(userDoc.data().todos)) {
        let todos = userDoc.data().todos;

        const todoIndex = todos.findIndex((t) => t.id === updatedValue.id);

        if (todoIndex !== -1) {
            todos = [
                ...todos.slice(0, todoIndex),
                updatedValue,
                ...todos.slice(todoIndex + 1),
            ];
            await updateDoc(userDocRef, { todos });
        }
    } else {
        console.log(`Todo with id ${updatedValue.id} not found.`);
    }
};

// DELETE A TODO
export const deleteTodoInDB = async (user, todo) => {
    try {
        const userDocRef = doc(db, 'users', user.id);
        const userDoc = await getDoc(userDocRef);

        if (userDoc.exists() && Array.isArray(userDoc.data().todos)) {
            const todos = userDoc.data().todos;
            const todoIndex = todos.findIndex((t) => t.id === todo.id);

            if (todoIndex !== -1) {
                // Remove the todo from the array
                todos.splice(todoIndex, 1);

                // Update the document with the new array
                await updateDoc(userDocRef, { todos });
            }
        } else {
            console.log(
                'Error deleting todo: todos field is not an array or does not exist'
            );
        }
    } catch (error) {
        console.log('Error deleting todo:', error.message);
    }
};
