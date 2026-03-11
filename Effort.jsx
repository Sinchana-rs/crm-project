import { useState } from "react"

function Effort(){

const [activities] = useState([

{ id:1, agent:"Rahul", activity:"Called Lead", lead:"Aman", date:"11 Mar 2026" },

{ id:2, agent:"Priya", activity:"Scheduled Visit", lead:"Ravi", date:"11 Mar 2026" },

{ id:3, agent:"Arjun", activity:"Follow-up Call", lead:"Neha", date:"10 Mar 2026" },

{ id:4, agent:"Rahul", activity:"Sent Property Details", lead:"Kiran", date:"10 Mar 2026" }

])

return(

<div className="p-6">

<h1 className="text-3xl font-bold mb-6">Agent Efforts</h1>

<div className="bg-white shadow rounded-xl overflow-hidden">

<table className="w-full table-fixed">

<thead className="bg-gray-100 text-gray-700">

<tr>

<th className="p-3 text-left w-1/4">Agent</th>
<th className="p-3 text-left w-1/4">Activity</th>
<th className="p-3 text-left w-1/4">Lead</th>
<th className="p-3 text-left w-1/4">Date</th>

</tr>

</thead>

<tbody>

{activities.map((item)=>(

<tr key={item.id} className="border-t hover:bg-gray-50">

<td className="p-3">{item.agent}</td>
<td className="p-3">{item.activity}</td>
<td className="p-3">{item.lead}</td>
<td className="p-3">{item.date}</td>

</tr>

))}

</tbody>

</table>

</div>

</div>

)

}

export default Effort