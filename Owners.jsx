import { useState,useEffect } from "react"
import axios from "axios"

function Owners(){

const [owners,setOwners]=useState([])
const [name,setName]=useState("")
const [phone,setPhone]=useState("")

useEffect(()=>{
fetchOwners()
},[])

function fetchOwners(){

axios.get("http://localhost:5000/owners")
.then(res=>setOwners(res.data))
.catch(err=>console.log(err))

}

function addOwner(){

if(name==="" || phone===""){
alert("Please fill all fields")
return
}

axios.post("http://localhost:5000/owners",{
name,
phone
}).then(()=>{
fetchOwners()
setName("")
setPhone("")
})

}

return(

<div className="p-6">

<h1 className="text-3xl font-bold mb-6">Owners</h1>

{/* Add Owner Form */}

<div className="flex gap-3 mb-6">

<input
placeholder="Owner Name"
value={name}
onChange={(e)=>setName(e.target.value)}
className="border p-2 rounded w-52"
/>

<input
placeholder="Phone"
value={phone}
onChange={(e)=>setPhone(e.target.value)}
className="border p-2 rounded w-52"
/>

<button
onClick={addOwner}
className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded"
>

Add Owner

</button>

</div>

{/* Owners Table */}

<div className="bg-white shadow rounded-xl overflow-hidden">

<table className="w-full table-fixed">

<thead className="bg-gray-100 text-gray-700">

<tr>

<th className="p-3 text-left w-1/2">Owner Name</th>
<th className="p-3 text-left w-1/2">Phone</th>

</tr>

</thead>

<tbody>

{owners.map(owner=>(

<tr key={owner.id} className="border-t hover:bg-gray-50">

<td className="p-3">{owner.name}</td>
<td className="p-3">{owner.phone}</td>

</tr>

))}

</tbody>

</table>

</div>

</div>

)

}

export default Owners