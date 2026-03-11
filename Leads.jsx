import { useState, useEffect } from "react"
import axios from "axios"
import { FaTrash } from "react-icons/fa"

function Leads(){

const [leads,setLeads] = useState([])
const [name,setName] = useState("")
const [phone,setPhone] = useState("")

useEffect(()=>{
fetchLeads()
},[])

function fetchLeads(){

axios.get("http://localhost:5000/leads")
.then(res=>{
setLeads(res.data)
})
.catch(err=>{
console.log(err)
})

}

function addLead(){

if(name === "" || phone === ""){
alert("Please fill all fields")
return
}

axios.post("http://localhost:5000/leads",{
name:name,
phone:phone,
status:"New"
})
.then(()=>{
fetchLeads()
setName("")
setPhone("")
})

}

function deleteLead(id){

axios.delete(`http://localhost:5000/leads/${id}`)
.then(()=>{
fetchLeads()
})

}

return(

<div className="p-6">

<h1 className="text-3xl font-bold mb-6">Leads</h1>

{/* Add Lead Form */}

<div className="flex gap-3 mb-6">

<input
type="text"
placeholder="Name"
value={name}
onChange={(e)=>setName(e.target.value)}
className="border p-2 rounded w-48"
/>

<input
type="text"
placeholder="Phone"
value={phone}
onChange={(e)=>setPhone(e.target.value)}
className="border p-2 rounded w-48"
/>

<button
onClick={addLead}
className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded"
>

Add Lead

</button>

</div>

{/* Leads Table */}

<div className="bg-white shadow rounded-xl overflow-hidden">

<table className="w-full table-fixed">

<thead className="bg-gray-100 text-gray-700">

<tr>

<th className="p-3 text-left w-1/3">Name</th>
<th className="p-3 text-left w-1/3">Phone</th>
<th className="p-3 text-center w-1/4">Status</th>
<th className="p-3 text-center w-16">Action</th>

</tr>

</thead>

<tbody>

{leads.map((lead)=>(

<tr key={lead.id} className="border-t hover:bg-gray-50">

<td className="p-3">{lead.name}</td>

<td className="p-3">{lead.phone}</td>

<td className="p-3 text-center">

<span className="px-3 py-1 bg-blue-100 text-blue-700 rounded">

{lead.status}

</span>

</td>

<td className="p-3 text-center">

<button
onClick={()=>deleteLead(lead.id)}
className="text-red-500 hover:text-red-700"
>

<FaTrash/>

</button>

</td>

</tr>

))}

</tbody>

</table>

</div>

</div>

)

}

export default Leads