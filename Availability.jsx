import { useState } from "react"

function Availability(){

const [availability] = useState([

{
id:1,
property:"Green Villa",
location:"Whitefield",
date:"15 Mar 2026",
time:"10:00 AM",
status:"Available"
},

{
id:2,
property:"Lake View Apartment",
location:"Marathahalli",
date:"16 Mar 2026",
time:"02:00 PM",
status:"Booked"
},

{
id:3,
property:"Sunrise Residency",
location:"Electronic City",
date:"17 Mar 2026",
time:"11:30 AM",
status:"Available"
},

{
id:4,
property:"Palm Meadows",
location:"Sarjapur",
date:"18 Mar 2026",
time:"04:00 PM",
status:"Available"
},

{
id:5,
property:"Orchid Heights",
location:"Indiranagar",
date:"19 Mar 2026",
time:"01:00 PM",
status:"Booked"
}

])

return(

<div className="p-6">

<h1 className="text-3xl font-bold mb-6">Property Availability</h1>

<div className="bg-white shadow rounded-xl overflow-hidden">

<table className="w-full table-fixed">

<thead className="bg-gray-100 text-gray-700">

<tr>

<th className="p-3 text-left w-1/5">Property</th>
<th className="p-3 text-left w-1/5">Location</th>
<th className="p-3 text-left w-1/5">Date</th>
<th className="p-3 text-left w-1/5">Time</th>
<th className="p-3 text-center w-1/5">Status</th>

</tr>

</thead>

<tbody>

{availability.map((item)=>(

<tr key={item.id} className="border-t hover:bg-gray-50">

<td className="p-3">{item.property}</td>
<td className="p-3">{item.location}</td>
<td className="p-3">{item.date}</td>
<td className="p-3">{item.time}</td>

<td className="p-3 text-center">

<span
className={`px-3 py-1 rounded text-white ${
item.status === "Available"
? "bg-green-500"
: "bg-red-500"
}`}
>

{item.status}

</span>

</td>

</tr>

))}

</tbody>

</table>

</div>

</div>

)

}

export default Availability