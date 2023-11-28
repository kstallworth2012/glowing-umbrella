import {useState} from "react"
import { Button, Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap';


/*
  Client ID: 860155485958-cudtb2bp6h8ilmrgni7dae2cj5kcaabv.apps.googleusercontent.com

  Client secret: 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


  API key    AIzaSyCkeFHtcMqOXuUVOardouFKuzVYzffcb_k
*/


function TaskModalDetail({open,toggle,taskID,projectID,name,description,dueDate,budget,defaulthourlyrate,isCompleted}){
// const [open,setOpen] = useState(false)
// const toggle = () => setOpen(!open);

return(
<>
<Modal isOpen={open} toggle={toggle}>
  <ModalHeader>
    Task Name: {name}<br />
    Task Completed:   {isCompleted ? 'Yes' : 'No'} 
  </ModalHeader>
  <ModalBody>
    {description}
  </ModalBody>
  <ModalFooter>
  Budget ${budget}<br />
  <Button color="info" onClick={()=>{alert(`${dueDate}`)}}>Due Date {dueDate}</Button>

  </ModalFooter>
</Modal>
</>
)
}

export default TaskModalDetail