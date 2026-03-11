import { Link } from "react-router-dom"
import {
FaChartPie,
FaUsers,
FaProjectDiagram,
FaChartBar,
FaUserTie,
FaHome,
FaCalendarCheck,
FaTasks,
FaSearch,
FaEnvelope,
FaHistory
} from "react-icons/fa"

function Sidebar(){

return(

<div className="w-64 bg-black text-white min-h-screen p-6">

<h1 className="text-2xl font-bold mb-10">Gharpayy</h1>

<p className="text-gray-400 text-sm mb-4">DEMAND</p>

<nav className="flex flex-col gap-3">

<Link to="/" className="hover:text-orange-400 flex gap-2 items-center">
<FaChartPie/> Dashboard
</Link>

<Link to="/leads" className="hover:text-orange-400 flex gap-2 items-center">
<FaUsers/> Leads
</Link>

<Link to="/pipeline" className="hover:text-orange-400 flex gap-2 items-center">
<FaProjectDiagram/> Pipeline
</Link>

<Link to="/matching" className="hover:text-orange-400 flex gap-2 items-center">
<FaSearch/> Matching
</Link>

<Link to="/messages" className="hover:text-orange-400 flex gap-2 items-center">
<FaEnvelope/> Messages
</Link>

<Link to="/historical" className="hover:text-orange-400 flex gap-2 items-center">
<FaHistory/> Historical
</Link>

<Link to="/analytics" className="hover:text-orange-400 flex gap-2 items-center">
<FaChartBar/> Analytics
</Link>

</nav>

<p className="text-gray-400 text-sm mt-8 mb-4">SUPPLY</p>

<nav className="flex flex-col gap-3">

<Link to="/owners" className="hover:text-orange-400 flex gap-2 items-center">
<FaUserTie/> Owners
</Link>

<Link to="/inventory" className="hover:text-orange-400 flex gap-2 items-center">
<FaHome/> Inventory
</Link>

<Link to="/availability" className="hover:text-orange-400 flex gap-2 items-center">
<FaCalendarCheck/> Availability
</Link>

<Link to="/effort" className="hover:text-orange-400 flex gap-2 items-center">
<FaTasks/> Effort
</Link>

</nav>

</div>

)

}

export default Sidebar