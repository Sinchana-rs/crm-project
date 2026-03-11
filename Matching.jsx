import { useState } from "react"

function Matching(){

const [matches] = useState([

{
id:1,
lead:"Aman",
property:"Green Villa",
location:"Whitefield",
price:"80L"
},

{
id:2,
lead:"Ravi",
property:"Lake View Apartment",
location:"Marathahalli",
price:"60L"
},

{
id:3,
lead:"Neha",
property:"Sunrise Heights",
location:"Electronic City",
price:"55L"
}

])

return(

<div className="p-6">

<h1 className="text-3xl font-bold mb-6">Lead Matching</h1>

<div className="bg-white shadow rounded-xl overflow-hidden">

<table className="w-full table-fixed">

<thead className="bg-gray-100 text-gray-700">

<tr>

<th className="p-3 text-left w-1/4">Lead</th>
<th className="p-3 text-left w-1/4">Property</th>
<th className="p-3 text-left w-1/4">Location</th>
<th className="p-3 text-left w-1/4">Price</th>

</tr>

</thead>

<tbody>

{matches.map((match)=>(

<tr key={match.id} className="border-t hover:bg-gray-50">

<td className="p-3">{match.lead}</td>
<td className="p-3">{match.property}</td>
<td className="p-3">{match.location}</td>
<td className="p-3">{match.price}</td>

</tr>

))}

</tbody>

</table>

</div>

</div>

)

}

export default Matching