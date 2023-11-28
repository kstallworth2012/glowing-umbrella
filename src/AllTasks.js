import {useSelector, useDispatch} from 'react-redux'
import './AllTasks.css'
import AllTasksRow from './AllTasksRow'
function AllTasks({Tasks,completed,budget}){
	// const dispatch = useDispatch()
	// const Tasks = useSelector(store => store)
	// const completed = () => dispatch({type:'TASK_COMPLETED'})
	// const budget = () => dispatch({type:'BUDGET_UNDER_THREE_HUNDRED_K'})
//================================================================================
	const HandleComplete = () => {completed()}
	const HandleBudget = () => {budget()}
	console.log(Tasks)

	return(

			<div>
			<button onClick={HandleComplete}>Completed Tasks</button>
			<button onClick={HandleBudget}>Under Budget</button>
				<table>
				<thead>
					<tr>
						<th>Task ID</th>
						<th>Project ID</th>
						<th>Name</th>
						<th>Description</th>
						<th>Due Date</th>
						<th>Budget</th>
						<th>Default Hourly Rate</th>
						<th>Completed</th>

					</tr>
				</thead>
				<tbody>
						{
							Tasks.map((t)=>{return(<AllTasksRow taskID={t.taskID} projectID={t.projectID} name={t.name} description={t.description} dueDate={t.dueDate} budget={t.budget} defaulthourlyrate={t.defaulthourlyrate} isCompleted={t.isCompleted} key = {t.taskID} />)})


						}
				</tbody>
				</table>
			</div>
		)
}

export default AllTasks