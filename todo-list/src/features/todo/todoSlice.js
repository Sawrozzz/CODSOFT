import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{
        id:1, text:"Learning  React"
    }]   
}

export const todoSlice = createSlice({
    name:"todo",
    initialState,
    reducers:{
        addTodo:(state, action) =>{
            const newTodo ={
                id:nanoid(),
                text:action.payload,
            }
            state.todos.push(newTodo);
        },

        deleteTodo:(state, action) =>{
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        },
        updateTodo:(state, action) =>{
            const {id, text} = action.payload
            const existingTodo = state.todos.find(todo => todo.id === id)
            if(existingTodo){
                existingTodo.text = text
            }
        },
        toggleTodo:(state,action)=>{
            const {id} = action.payload
            const existingTodo = state.todos.find(todo => todo.id === id)
            if(existingTodo){
                existingTodo.completed = !existingTodo.completed
            }

        }
    }
})

export const {addTodo, deleteTodo, updateTodo, toggleTodo} = todoSlice.actions
export default todoSlice.reducer