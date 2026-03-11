import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import { useState } from "react"

import { FaBars, FaHome, FaUsers, FaChartBar, FaBuilding, FaBox, FaCalendar, FaTasks, FaBullseye, FaEnvelope, FaHistory } from "react-icons/fa"

import Dashboard from "./pages/Dashboard"
import Leads from "./pages/Leads"
import Pipeline from "./pages/Pipeline"
import Owners from "./pages/Owners"
import Inventory from "./pages/Inventory"
import Availability from "./pages/Availability"
import Effort from "./pages/Effort"
import Matching from "./pages/Matching"
import Messages from "./pages/Messages"
import Historical from "./pages/Historical"

function App(){

const [open,setOpen] = useState(true)

return(

<Router>

<div className="flex min-h-screen bg-gray-100">

{/* Sidebar */}

<div className={`bg-gray-900 text-white transition-all duration-300 ${open ? "w-64" : "w-16"} p-4`}>

<h1 className="text-xl font-bold mb-8 text-center">CRM</h1>

<ul className="space-y-4">

<li>
<Link className="flex items-center gap-3 hover:text-blue-400" to="/">
<FaHome/> {open && "Dashboard"}
</Link>
</li>

<li>
<Link className="flex items-center gap-3 hover:text-blue-400" to="/leads">
<FaUsers/> {open && "Leads"}
</Link>
</li>

<li>
<Link className="flex items-center gap-3 hover:text-blue-400" to="/pipeline">
<FaChartBar/> {open && "Pipeline"}
</Link>
</li>

<li>
<Link className="flex items-center gap-3 hover:text-blue-400" to="/owners">
<FaBuilding/> {open && "Owners"}
</Link>
</li>

<li>
<Link className="flex items-center gap-3 hover:text-blue-400" to="/inventory">
<FaBox/> {open && "Inventory"}
</Link>
</li>

<li>
<Link className="flex items-center gap-3 hover:text-blue-400" to="/availability">
<FaCalendar/> {open && "Availability"}
</Link>
</li>

<li>
<Link className="flex items-center gap-3 hover:text-blue-400" to="/effort">
<FaTasks/> {open && "Effort"}
</Link>
</li>

<li>
<Link className="flex items-center gap-3 hover:text-blue-400" to="/matching">
<FaBullseye/> {open && "Matching"}
</Link>
</li>

<li>
<Link className="flex items-center gap-3 hover:text-blue-400" to="/messages">
<FaEnvelope/> {open && "Messages"}
</Link>
</li>

<li>
<Link className="flex items-center gap-3 hover:text-blue-400" to="/historical">
<FaHistory/> {open && "Historical"}
</Link>
</li>

</ul>

</div>

{/* Main Section */}

<div className="flex-1">

{/* Top Navbar */}

<div className="bg-white shadow p-4 flex items-center justify-between">

<div className="flex items-center gap-4">

<button
onClick={()=>setOpen(!open)}
className="text-xl"
>

<FaBars/>

</button>

<h1 className="text-xl font-semibold">CRM Dashboard</h1>

</div>

<div className="font-medium text-gray-600">
Admin
</div>

</div>

{/* Page Content */}

<div className="p-6">

<Routes>

<Route path="/" element={<Dashboard/>}/>
<Route path="/leads" element={<Leads/>}/>
<Route path="/pipeline" element={<Pipeline/>}/>
<Route path="/owners" element={<Owners/>}/>
<Route path="/inventory" element={<Inventory/>}/>
<Route path="/availability" element={<Availability/>}/>
<Route path="/effort" element={<Effort/>}/>
<Route path="/matching" element={<Matching/>}/>
<Route path="/messages" element={<Messages/>}/>
<Route path="/historical" element={<Historical/>}/>

</Routes>

</div>

</div>

</div>

</Router>

)

}

export default App