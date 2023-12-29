import Sidebar from "./components/Sidebar"
import Dashboard from "./components/Dashboard"
import Create from "./components/Create"
import Edit from "./components/Edit"
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { useState } from "react"
function App() {
 let[data,setData]= useState([
{
   name:"Vishaka",
   username:"vis123",
   email:"vishaka@gmail.com",
   mobile:8977645431,
   batch:"B50WDT",

},
{
  name:"Sim",
  username:"sim123",
  email:"sim@gmail.com",
  mobile:9977645431,
  batch:"B51WDT",
}

 ])

  return <>
   <div id="wrapper">
    <BrowserRouter>
    <Sidebar/>
    <Routes>
    <Route path='/dashboard' element={<Dashboard data={data} setData={setData}/> }/>
    <Route path='/create' element={<Create/>}/>
    <Route path='/edit' element={<Edit/>}/>
    </Routes>
    </BrowserRouter>
   
   </div>
  </>
}

export default App
