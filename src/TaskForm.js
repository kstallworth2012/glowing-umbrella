import {useState} from "react"
import { Button,Label,Form,FormGroup,Input } from 'reactstrap'


const INITIAL_FORM = {
	taskID:"",
	projectID:"",
	name:"",
	description:"",
	dueDate:"",
	budget:"",
	defaulthourlyrate:"",
	isCompleted:""
}

function TaskForm({addTask}){
const [formData,setFormData] = useState(INITIAL_FORM)

function handleSubmit(evt){
	evt.preventDefault()
	addTask({...formData})
	setFormData(INITIAL_FORM)
}

function handleChange(evt){
	const {name, value} = evt.target
	setFormData((f)=>{
		return(
				{...f, [name]:value}

			)
	})
}

return(
			<div>
			<Form>
						 <FormGroup>
							<Label htmlFor="taskID">Task ID</Label>
							<Input
							      id="taskID"
							      name="taskID"
							      placeholder="Enter Task ID"
							      type="number"
							      value={formData.taskID}
							      onChange={handleChange}

							    />
						 </FormGroup>
						
						  <FormGroup>
							<Label htmlFor="projectID">Project ID</Label>
								<Input
							      id="projectID"
							      name="projectID"
							      placeholder="Enter Project ID"
							      type="number"
							      value={formData.projectID}
							      onChange={handleChange}

							    />
						 </FormGroup>
						
						 <FormGroup>
							<Label htmlFor="name">Name</Label>
							<Input
							      id="name"
							      name="name"
							      placeholder="Enter Task Name"
							      type="text"
							      value={formData.name}
							      onChange={handleChange}

							    />
						 </FormGroup>
						
						 <FormGroup>
							<Label htmlFor="description">Description</Label>
							<Input
							      id="description"
							      name="description"
							      placeholder="Enter Task Details"
							      type="text"
							      value={formData.description}
							      onChange={handleChange}

							    />
						 </FormGroup>
						
						 <FormGroup>
							<Label htmlFor="dueDate">Due Date</Label>
							<Input
							      id="dueDate"
							      name="dueDate"
							      placeholder="Enter Task dueDate"
							      type="text"
							      value={formData.dueDate}
							      onChange={handleChange}

							    />
						 </FormGroup>

						  <FormGroup>
							<Label htmlFor="budget">Budget</Label>
							<Input
							      id="budget"
							      name="budget"
							      placeholder="Enter Task Budget"
							      type="number"
							      value={formData.budget}
							      onChange={handleChange}

							    />
						 </FormGroup>
						
						 <FormGroup>
							<Label htmlFor="defaulthourlyrate">Default Hourly Rate</Label>
							<Input
							      id="defaulthourlyrate"
							      name="defaulthourlyrate"
							      placeholder="Hourly Rate"
							      type="text"
							      value={formData.defaulthourlyrate}
							      onChange={handleChange}

							    />
						 </FormGroup>
						
						  <FormGroup>
							<Label htmlFor="isCompleted">Completed</Label>
							<Input
							      id="isCompleted"
							      name="isCompleted"
							      placeholder="Completed Task?"
							      type="text"
							      value={formData.isCompleted}
							      onChange={handleChange}

							    />
						 </FormGroup>
						  <Button type="submit" id="form_submit" onClick={handleSubmit}>
						    Submit
						  </Button>
			</Form>
			</div>
		)

	}

export default TaskForm