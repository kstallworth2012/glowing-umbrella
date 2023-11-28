import { render, screen } from '@testing-library/react';
import App from './App';
import SingleTask from './SingleTask'
import AllTasksRow from './AllTasksRow'
import {useSelector, useDispatch} from 'react-redux'

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });


  // test("SingleTask",()=>{
  //    render(<SingleTask />)
  // })

   test("AllTasksRow",()=>{
     render(<AllTasksRow />)
  })
