import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import Assigment1 from './components/Assigment1.jsx'
import Assigment2 from './components/Assigment2.jsx'
// import Assigment3 from './components/Assigment3.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* {<Assigment1 />} */}
    <Assigment2 />
   {/* { <Assigment3 />} */}
  </StrictMode>,
)