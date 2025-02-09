import { useState } from "react";
function App() {
 const [count,setCount]=useState(0);

  return (
      <div>
       <CustomButton count={count} setCount={setCount}></CustomButton>
       </div>
  )
}
function CustomButton(props){
  function onClickhandler(){
    props.setCount(props.count+1);
  }
  return <button onClick={onClickhandler}> counter {props.count}</button>
}
export default App
