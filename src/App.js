
import { Route, Routes } from 'react-router-dom';
import ToDoList from './ToDoList/ToDoList'
import AddToDo from './ToDoList/AddToDo';
import EditToDo from './ToDoList/EditToDo';


function App() {
  return (
		<div className='  flex justify-center w-[100%] mt-12 md:mt-28 '>
			<div>
				<h1 className='text-center text-pink-500 text-4xl  rounded-md p-2 font-serif '>ToDo list</h1>
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