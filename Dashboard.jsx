import { useEffect, useState } from "react"
import axios from "axios"
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts"

function Dashboard(){

const [leads,setLeads] = useState([])

useEffect(()=>{

axios.get("http://localhost:5000/leads")
.then(res=>{
setLeads(res.data)
})

},[])

const totalLeads = leads.length
const contacted = leads.filter(l=>l.status==="Contacted").length
const won = leads.filter(l=>l.status==="Won").length
const lost = leads.filter(l=>l.status==="Lost").length

const chartData = [
{ name:"Leads", value:totalLeads },
{ name:"Contacted", value:contacted },
{ name:"Won", value:won },
{ name:"Lost", value:lost }
]

return(

<div>

<h1 className="text-3xl font-bold mb-6">Dashboard</h1>

{/* Stats Cards */}

<div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">

<div className="bg-white p-6 rounded shadow">
<h2 className="text-gray-500">Total Leads</h2>
<p className="text-3xl font-bold">{totalLeads}</p>
</div>

<div className="bg-white p-6 rounded shadow">
<h2 className="text-gray-500">Contacted</h2>
<p className="text-3xl font-bold">{contacted}</p>
</div>

<div className="bg-white p-6 rounded shadow">
<h2 className="text-gray-500">Won Deals</h2>
<p className="text-3xl font-bold text-green-600">{won}</p>
</div>

<div className="bg-white p-6 rounded shadow">
<h2 className="text-gray-500">Lost Deals</h2>
<p className="text-3xl font-bold text-red-600">{lost}</p>
</div>

</div>

{/* Chart */}

<div className="bg-white p-6 rounded shadow mb-8">

<h2 className="text-xl font-semibold mb-4">Sales Overview</h2>

<ResponsiveContainer width="100%" height={300}>

<BarChart data={chartData}>
<XAxis dataKey="name"/>
<YAxis/>
<Tooltip/>
<Bar dataKey="value"/>
</BarChart>

</ResponsiveContainer>

</div>

{/* Recent Leads */}

<div className="bg-white p-6 rounded shadow">

<h2 className="text-xl font-semibold mb-4">Recent Leads</h2>

<table className="w-full">

<thead className="bg-gray-100">

<tr>
<th className="p-3 text-left">Name</th>
<th>Phone</th>
<th>Status</th>
</tr>

</thead>

<tbody>

{leads.slice(0,5).map((lead)=>(
<tr key={lead.id} className="border-t">

<td className="p-3">{lead.name}</td>
<td>{lead.phone}</td>
<td>{lead.status}</td>

</tr>
))}

</tbody>

</table>

</div>

</div>

)

}

export default Dashboard