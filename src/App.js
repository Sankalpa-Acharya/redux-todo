import "./App.css";
import {useDispatch,useSelector} from 'react-redux'
import {delTodo,addTodo} from './actions/todoActions'
import {useState} from 'react'
function App() {
  const dispatch = useDispatch();
  const todo = useSelector((state)=>state.todoReducer);
  const [inputData,setData] = useState(''); 
  
  const submit = (e) => {
   if(e.key === 'Enter') { dispatch(addTodo(inputData),setData(''))} 
  }

  return (
    <div className="container">
      <div className="input__container">
        <input onKeyDown={submit} onChange={(event)=>{setData(event.target.value)}} type="text" />
        <button onClick={()=>{dispatch(addTodo(inputData),setData(''))}}>Add</button>
      </div>

      <div className="todo__container">
    {
      todo.map((data)=>{
        return (
          <div key={data.id} className="todo">
          <span>{data.data}</span>
          <i onClick={()=>{dispatch(delTodo(data.id))}} className="fa-solid fa-trash"></i>
        </div>
        )
      })
    }

      </div>
    </div>
  );
}

export default App;
