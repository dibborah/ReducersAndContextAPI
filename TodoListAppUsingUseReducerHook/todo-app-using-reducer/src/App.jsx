import { useReducer } from 'react';
import './App.css'

const reducer = (todos, action) => {//reducer function ka ek rule hain ki ya to ye state return karega ya phir koi error throw karega
    
}

function App() {
  const [todos, dispatch] = useReducer(reducer,initialTodos);
  return (
    <>
      <h1>Hello Universe!!!</h1>
    </>
  )
}

export default App;
