
import { Route, Routes } from 'react-router-dom';
import ToDoList from './features/users/ToDoList'
import AddToDo from './features/users/AddToDo';
import EditToDo from './features/users/EditToDo';


function App() {
  return (
		<div className='  flex justify-center w-[100%] mt-28 '>
			<div>
				<h1 className='text-center text-white bg-pink-500 text-2xl font-semibold rounded-md p-2'>ToDo list</h1>
				<Routes>
					<Route path='/' element={<ToDoList />} />
					<Route path='add-todo' element={<AddToDo />} />
					<Route path='/edit-todo/:id' element={<EditToDo />} />
				</Routes>
			</div>
		</div>
  );
}

export default App;