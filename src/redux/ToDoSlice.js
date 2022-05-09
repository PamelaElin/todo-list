import { createSlice } from '@reduxjs/toolkit';
const initialState = [];
const ToDoSlice = createSlice({
	name: 'todoApp',
	initialState,
	reducers: {
		addTodo: (state, action) => {
			state.push(action.payload);
		},
		editTodo: (state, action) => {
			const { id, title, text } = action.payload;
			const existingToDo = state.find((todo) => todo.id === id);
			if (existingToDo) {
				existingToDo.title= title;
				existingToDo.text = text;
			}
		},
		deleteTodo: (state, action) => {
			const { id } = action.payload;
			const existingToDo = state.find((todo) => todo.id === id);
			if (existingToDo) {
				return state.filter((todo) => todo.id !== id);
			}
		},
	},
});
export const { addTodo, editTodo, deleteTodo} = ToDoSlice.actions;
export default ToDoSlice.reducer;