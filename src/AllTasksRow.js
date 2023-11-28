import {useState} from "react"
import {Button,Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap'
import TaskModalDetail from './TaskModalDetail'

// <AllTasksRow taskID={t.taskID} projectID={t.projectID} name={t.name} description={t.description} dueDate={t.dueDate} budget={t.budget} defaulthourlyrate={t.defaulthourlyrate} isCompleted={t.isCompleted} key = {t.taskID} />
function AllTasksRow({taskID,projectID,name,description,dueDate,budget,defaulthourlyrate,isCompleted}){
	const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);


	return(

				<tr>
						<td><Button color="success" onClick={toggle}>{taskID}</Button></td>
						<td>{projectID}</td>
						<td>{name}</td>
						<td>{description}</td>
						<td>{dueDate}</td>
						<td>${budget}</td>
						<td>${defaulthourlyrate}</td>
						<td>{isCompleted ? 'Yes' : 'No'}</td>
						<TaskModalDetail  open ={modal} toggle={toggle} taskID={taskID} projectID={projectID} name={name} 
											description={description} dueDate={dueDate} 
											budget={budget} defaulthourlyrate={defaulthourlyrate} 
											isCompleted={isCompleted}  />
	
			</tr>
			)
}

export default AllTasksRow