import { useState , useEffect} from 'react'


function App() {
  const [count, setCount] = useState(0)
  useEffect(()=>{
    alert(count);
  },[count])
  return (
   <div>
     <button onClick={()=>{
      setCount(count+1)
     }}>
      Increase count
     </button>
   </div>
  )
}

export default App
