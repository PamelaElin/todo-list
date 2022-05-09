import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '../components/Button/Button';
import TextField from '../components/TextField/TextField';
import { editTodo } from '../redux/ToDoSlice';

const EditToDo = () => {
	const params = useParams();
	const dispatch = useDispatch();
	const todoApp = useSelector((store) => store.todoApp);
	console.log(params.id);
	const navigate = useNavigate();
	const existingToDo= todoApp.filter((todo) => todo.id === params.id);
	const { title, text } = existingToDo[0];
	const [values, setValues] = useState({
		title,
		text
	});
	const handleEditToDO = () => {
		setValues({ title: '', text: '' });
		dispatch(
			editTodo({
				id: params.id,
				title: values.title,
				text: values.text,
			})
		);
		navigate('/');
	};
	return (
		<div className='container p-4 rounded-md drop-shadow-lg mt-10  flex flex-col justify-center bg-white w-[17rem]'>
			<TextField
				
				value={values.title}
				onChange={(e) => setValues({ ...values, title: e.target.value })}
				inputProps={{ type: 'tex', placeholder: 'Edit title' }}
				maxLength='20'
			/>
			<TextField
				
				value={values.text}
				onChange={(e) => setValues({ ...values, text: e.target.value })}
				inputProps={{ type: 'text', placeholder: 'Edit Text' }}
				maxLength='100'
			/>
			
			<Button onClick={handleEditToDO}>Edit</Button>
		</div>
	);
};

export default EditToDo;