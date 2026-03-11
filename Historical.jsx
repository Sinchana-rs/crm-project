import { useState } from "react"

function Historical(){

const [history] = useState([

{ id:1, lead:"Rahul", action:"Lead Created", agent:"Admin", date:"10 Mar 2026" },

{ id:2, lead:"Aman", action:"Property Matched", agent:"Rahul", date:"10 Mar 2026" },

{ id:3, lead:"Ravi", action:"Visit Scheduled", agent:"Priya", date:"11 Mar 2026" },

{ id:4, lead:"Neha", action:"Follow-up Call", agent:"Arjun", date:"11 Mar 2026" }

])

return(

<div className="p-6">

<h1 className="text-3xl font-bold mb-6">Historical Activity</h1>

<div className="bg-white shadow rounded-xl overflow-hidden">

<table className="w-full table-fixed">

<thead className="bg-gray-100 text-gray-700">

<tr>

<th className="p-3 text-left w-1/4">Lead</th>
<th className="p-3 text-left w-1/4">Action</th>
<th className="p-3 text-left w-1/4">Agent</th>
<th className="p-3 text-left w-1/4">Date</th>

</tr>

</thead>

<tbody>

{history.map((item)=>(

<tr key={item.id} className="border-t hover:bg-gray-50">

<td className="p-3">{item.lead}</td>
<td className="p-3">{item.action}</td>
<td className="p-3">{item.agent}</td>
<td className="p-3">{item.date}</td>

</tr>

))}

</tbody>

</table>

</div>

</div>

)

}

export default Historical   