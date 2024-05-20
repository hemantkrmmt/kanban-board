import { useState, useEffect } from 'react';
import './App.css';
import KanbanBoard from './components/KanbanBoard';

function App() {
  const [data, setData] = useState([])

useEffect(()=>{
   fetch("https://api.quicksell.co/v1/internal/frontend-assignment").then((data)=>{
  return data.json()
   }).then((parsedData)=>{
    setData(parsedData)
   }).catch(e=>{
    setData([])
})
   
},[])

  return (
    <div className="App">
     <KanbanBoard data={data} />
    </div>
  );
}

export default App;
