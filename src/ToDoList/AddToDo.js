import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import TextField from '../components/TextField';
import { v4 as uuidv4 } from 'uuid';
import { addTodo } from '../redux/ToDoSlice';

const AddToDo = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const todoApp = () => navigate('/');;
	const [values, setValues] = useState({
		title: '',
		text: '',
	});
	const handleAddToDo= () => {
		setValues({ title: '', text: '' });
		dispatch(
			addTodo({
				id: uuidv4(),
				title: values.title,
				text: values.text,
			})
		);
		
		todoApp();
	};
	return (
		<div className='container p-4 rounded-md drop-shadow-lg mt-10  flex flex-col justify-center bg-white '>
			<TextField
				
				value={values.title}
				onChange={(e) => setValues({ ...values, title: e.target.value })}
				inputProps={{ type: 'text', placeholder: 'Title' }}
				maxLength='20'
			/>
			<TextField

				value={values.text}
				onChange={(e) => setValues({ ...values, text: e.target.value })}
				inputProps={{ type: 'text', placeholder: 'ToDo' }}
				maxLength='100'
                
			/>
			<div className='flex mx-2'>
				<Button onClick={handleAddToDo}>Submit</Button>
				<Button onClick={todoApp}>Cancel</Button>
			</div>
		</div>
	);
};

export default AddToDo;