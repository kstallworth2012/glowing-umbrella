import {useSelector} from 'react-redux'

const SingleTask =()=>{
		const Task = useSelector(store => store[100])
		// const Tasks = useSelector(store => store)

		// console.log(Tasks)
		return (
			<div>
			<h1>Hello welcome To My Task Component</h1>
			<h2>Task Name: {Task.name}</h2>
			<h3>Due Date: {Task.dueDate}</h3>
			<h4>Operating Budget: ${Task.budget}</h4>

			<p><b>Desrciption:</b><br />{Task.description}</p>
			</div>
			)
}

export default SingleTask