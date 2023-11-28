import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector, useDispatch } from "react-redux";
import AllTasks from './AllTasks'
// import SingleTask from './SingleTask'
import TaskForm from './TaskForm'
function App() {
  const dispatch = useDispatch()
  const Tasks = useSelector(store => store)
  const completed = () => dispatch({type:'TASK_COMPLETED'})
  const budget = () => dispatch({type:'BUDGET_UNDER_THREE_HUNDRED_K'})
  function addTask(newTask){
    dispatch({type:'ADD_TASK', task: newTask })
  }
  return (
    <div className="App">
     <TaskForm addTask = {addTask} />
     <hr />
     <AllTasks Tasks={Tasks} completed={completed} budget={budget} />
    </div>
  );
}

export default App;
